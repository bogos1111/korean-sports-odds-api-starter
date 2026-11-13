<?php
class MarketJudge {
    // 승무패 (ft_ml) 정산 로직 샘플
    public static function judgeMatchWinner($homeScore, $awayScore, $odds2) {
        if ($homeScore > $awayScore) return "odds1"; // 홈승
        if ($homeScore < $awayScore) return "odds3"; // 원정승
        
        // 무승부일 경우 (무배당이 없으면 적특)
        return empty($odds2) ? "refund" : "odds2"; 
    }

    // 언더오버 (ft_ou) 정산 로직 샘플
    public static function judgeOverUnder($homeScore, $awayScore, $line) {
        $total = $homeScore + $awayScore;
        if ($total < $line) return "odds1"; // 언더
        if ($total > $line) return "odds3"; // 오버
        return "refund"; // 기준점과 동일하면 적특(Refund)
    }
}
