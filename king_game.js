        
/**
* king_game.js: 無名関数で全体をまとめる
*/
(function(){


    /**
    * 「王様曰く」ボタンが押されたら、kingSaid()発動。
    */
    document.getElementById('kingSaid').onclick   = function(){
        kingSaid();
    }


    /**
    * 王様ゲームの命令ロジック
    */
    function kingSaid(){

        // 命令定義
        var orders = [
            'デコピンしなさい',
            'クイズを出しなさい',
            'ほめちぎりなさい',
            'ドリンクを注ぎなさい'
        ];
        // 0〜n　→ Math.floor(Math.random() * (n + 1))　今回の場合→ Math.floor(Math.random() * orders.length)
        var order = orders[Math.floor(Math.random() * orders.length)];


        // 入力値取得
        var num = document.getElementById('num').value;

        // 入力値の判定 : 数値型かどうか
        if(Number(num)){
            
            // 王様を決める
            var p1 = Math.floor(Math.random() * (num)) + 1;

            // 手下を宣言
            var p2; 

            // 1人での参加の場合は1人2役する
            if(num < 2){

                p2 = 1;
            }else{

                do{
                    p2 = Math.floor(Math.random() * (num)) + 1;
                }while(p1 == p2);
            }

            document.getElementById('result').innerHTML = p1 + "の人が"　+ p2 + "の人に" + order;
        }else{

            document.getElementById('result').innerHTML = "数値を入力してください。";
        }
    }
})();