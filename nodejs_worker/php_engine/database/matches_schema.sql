CREATE TABLE `matches` (
  `match_id` varchar(50) NOT NULL,
  `status` varchar(20) DEFAULT 'pending',
  `home_score` int(11) DEFAULT 0,
  `away_score` int(11) DEFAULT 0,
  `period_scores` json DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`match_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 상세 점수 역행 방지 단조증가 UPSERT 쿼리는 공식 문서(llms-full.txt)를 참조하세요.
