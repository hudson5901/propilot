-- ProPilot Database Schema
-- Run this in Supabase SQL Editor

-- =====================
-- 1. 専門家テーブル
-- =====================
CREATE TABLE IF NOT EXISTS experts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,          -- 税理士, 司法書士, 弁護士, 社労士, 行政書士
  icon_name TEXT NOT NULL,     -- Calculator, Building, Scale, ShieldCheck, FilePen
  icon_color TEXT NOT NULL,    -- text-accent, text-success, etc.
  rating NUMERIC(2,1) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  experience TEXT NOT NULL,    -- "15年"
  location TEXT,
  price TEXT NOT NULL,         -- "¥30,000〜"
  bio TEXT,
  match_score INTEGER DEFAULT 0,
  specialties TEXT[] DEFAULT '{}',
  qualifications TEXT[] DEFAULT '{}',
  badges TEXT[] DEFAULT '{}',
  stats_cases INTEGER DEFAULT 0,
  stats_repeat_rate TEXT,
  stats_avg_response TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =====================
-- 2. 専門家レビューテーブル
-- =====================
CREATE TABLE IF NOT EXISTS expert_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  expert_id UUID NOT NULL REFERENCES experts(id) ON DELETE CASCADE,
  reviewer_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  text TEXT NOT NULL,
  review_date TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =====================
-- 3. サービスカテゴリテーブル
-- =====================
CREATE TABLE IF NOT EXISTS services (
  id TEXT PRIMARY KEY,         -- tax, registration, legal, etc.
  icon_name TEXT NOT NULL,
  icon_color TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  examples TEXT[] DEFAULT '{}',
  sort_order INTEGER DEFAULT 0
);

-- =====================
-- 4. サービス × 専門家種別 中間テーブル
-- =====================
CREATE TABLE IF NOT EXISTS service_experts (
  service_id TEXT NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  expert_role TEXT NOT NULL,
  role_color TEXT NOT NULL,
  PRIMARY KEY (service_id, expert_role)
);

-- =====================
-- 5. クライアントテーブル（専門家側の顧客）
-- =====================
CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  current_service TEXT NOT NULL,
  status TEXT NOT NULL,        -- 進行中, 完了, レビュー中
  since TEXT NOT NULL,
  project_count INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =====================
-- 6. スケジュールテーブル
-- =====================
CREATE TABLE IF NOT EXISTS schedules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  schedule_date TEXT NOT NULL,    -- "今日", "明日", "1/20"
  time TEXT NOT NULL,
  client_name TEXT NOT NULL,
  title TEXT NOT NULL,
  meeting_type TEXT,              -- オンライン, 対面
  duration TEXT,
  is_today BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =====================
-- 7. 取引履歴テーブル
-- =====================
CREATE TABLE IF NOT EXISTS transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  transaction_date TEXT NOT NULL,
  client_name TEXT NOT NULL,
  description TEXT NOT NULL,
  amount TEXT NOT NULL,
  status TEXT NOT NULL,          -- 入金済, 未入金
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =====================
-- 8. ユーザープロジェクトテーブル
-- =====================
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  status TEXT NOT NULL,          -- 進行中, レビュー中, 完了
  progress INTEGER DEFAULT 0,
  deadline TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =====================
-- 9. プロジェクトチームメンバー
-- =====================
CREATE TABLE IF NOT EXISTS project_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  role TEXT NOT NULL
);

-- =====================
-- 10. プロジェクトタスク
-- =====================
CREATE TABLE IF NOT EXISTS project_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  done BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0
);

-- =====================
-- 11. 書類テーブル
-- =====================
CREATE TABLE IF NOT EXISTS documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  file_type TEXT NOT NULL,
  size TEXT NOT NULL,
  upload_date TEXT NOT NULL,
  sender TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =====================
-- 12. 請求書テーブル
-- =====================
CREATE TABLE IF NOT EXISTS invoices (
  id TEXT PRIMARY KEY,           -- INV-001
  expert_name TEXT NOT NULL,
  expert_role TEXT NOT NULL,
  description TEXT NOT NULL,
  amount TEXT NOT NULL,
  invoice_date TEXT NOT NULL,
  status TEXT NOT NULL,          -- 支払済, 未払い
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =====================
-- SEED DATA: 専門家
-- =====================
INSERT INTO experts (name, role, icon_name, icon_color, rating, reviews_count, experience, location, price, bio, match_score, specialties, qualifications, badges, stats_cases, stats_repeat_rate, stats_avg_response) VALUES
  ('山田 一郎', '税理士', 'Calculator', 'text-accent', 4.9, 128, '15年', '東京都千代田区', '¥30,000〜',
   '大手税理士法人での10年の経験を経て独立。個人事業主から中小企業まで幅広くサポートしています。特に確定申告と節税対策に強みがあり、クライアント一人ひとりに合わせた丁寧な対応を心がけています。',
   98, ARRAY['確定申告','節税対策','法人税務','記帳代行','税務調査対応'], ARRAY['税理士','CFP®','日商簿記1級'], ARRAY['レスポンス◎','リピーター多数'], 500, '85%', '2時間以内'),
  ('佐藤 美咲', '司法書士', 'Building', 'text-success', 4.8, 96, '12年', '東京都渋谷区', '¥50,000〜',
   '不動産登記と商業登記を中心に、会社設立から相続手続きまで幅広く対応しています。',
   95, ARRAY['会社設立','商業登記','相続手続き'], ARRAY['司法書士','行政書士'], ARRAY['女性専門家','オンライン対応'], 320, '80%', '3時間以内'),
  ('鈴木 健太', '弁護士', 'Scale', 'text-warning', 4.7, 84, '10年', '東京都港区', '¥50,000〜',
   '企業法務を専門とし、契約書の作成・レビューから紛争解決まで一貫してサポートいたします。',
   92, ARRAY['企業法務','契約書','紛争解決'], ARRAY['弁護士','中小企業診断士'], ARRAY['英語対応','業界経験豊富'], 250, '75%', '4時間以内'),
  ('高橋 裕子', '社労士', 'ShieldCheck', 'text-[#DB2777]', 4.9, 72, '8年', '東京都新宿区', '¥25,000〜',
   '就業規則の策定から助成金申請まで、中小企業の労務管理をトータルにサポートしています。',
   90, ARRAY['就業規則','助成金','労務管理'], ARRAY['社会保険労務士','キャリアコンサルタント'], ARRAY['土日対応','チャット重視'], 180, '90%', '1時間以内');

-- =====================
-- SEED DATA: 専門家レビュー
-- =====================
INSERT INTO expert_reviews (expert_id, reviewer_name, rating, text, review_date)
SELECT e.id, r.reviewer_name, r.rating, r.text, r.review_date
FROM experts e
CROSS JOIN (VALUES
  ('山田 一郎', 'A.T.', 5, '初めての確定申告で不安でしたが、丁寧に教えていただきました。来年もお願いしたいです。', '2025/01'),
  ('山田 一郎', 'K.S.', 5, '節税のアドバイスが的確で、思った以上に還付を受けられました。レスポンスも早く助かりました。', '2024/12'),
  ('山田 一郎', 'M.Y.', 4, '法人化の際の税務まわりを全て対応いただきました。説明もわかりやすかったです。', '2024/11')
) AS r(expert_name, reviewer_name, rating, text, review_date)
WHERE e.name = r.expert_name;

-- =====================
-- SEED DATA: サービス
-- =====================
INSERT INTO services (id, icon_name, icon_color, title, description, examples, sort_order) VALUES
  ('tax', 'Calculator', 'text-accent', '確定申告・税務', '個人・法人の確定申告、節税対策、税務調査対応', ARRAY['確定申告','節税相談','税務調査','記帳代行'], 1),
  ('registration', 'Building', 'text-success', '法人設立・登記', '会社設立、役員変更、本店移転、各種登記手続き', ARRAY['会社設立','役員変更','商業登記','不動産登記'], 2),
  ('legal', 'Scale', 'text-warning', '契約・法務', '契約書作成・レビュー、紛争解決、法律相談', ARRAY['契約書レビュー','紛争解決','企業法務','債権回収'], 3),
  ('labor', 'ShieldCheck', 'text-[#DB2777]', '労務・社会保険', '就業規則、給与計算、社会保険手続き、助成金', ARRAY['就業規則','給与計算','助成金申請','労務相談'], 4),
  ('permit', 'FilePen', 'text-[#7C3AED]', '許認可・届出', '建設業許可、飲食店営業許可、各種届出書類', ARRAY['建設業許可','飲食店許可','在留資格','届出書類'], 5),
  ('inheritance', 'Calculator', 'text-accent', '相続・遺産', '相続税申告、遺産分割、遺言書作成、名義変更', ARRAY['相続税申告','遺産分割','遺言書','名義変更'], 6);

INSERT INTO service_experts (service_id, expert_role, role_color) VALUES
  ('tax', '税理士', 'text-accent'),
  ('registration', '司法書士', 'text-success'),
  ('legal', '弁護士', 'text-warning'),
  ('labor', '社労士', 'text-[#DB2777]'),
  ('permit', '行政書士', 'text-[#7C3AED]'),
  ('inheritance', '税理士', 'text-accent'),
  ('inheritance', '司法書士', 'text-success'),
  ('inheritance', '弁護士', 'text-warning');
