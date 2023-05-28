# local_storage_App1
ローカルストレージアプリとして「三浦流！寝てても痩せるダイエットカウンター」を作ります！

昔、中島らもの「牢屋で痩せるダイエット」という本がありましたが、そんな感じで「寝てても痩せるダイエット」カウンターづくりにガチで取り組んで見ます。

着目したのは「基礎代謝」です。人間、わざわざ運動をしなくても、息をしたり考えたりという基本的な生命維持だけでまあまあのカロリーを消費します

わかりやすいのは夜寝て、朝起きたときにどれくらい体重が減っているかどうか
飲まず食わずの８時間睡眠を経て、起きたら太ってる人はエネルギー保存の法則からしてもあり得ません

ということで、自分自身の基礎代謝を知り、減る量を理解した上で食べる量を管理したり、追加で運動を考えたりといモチベーションを維持するための「見える化」を目指します

# 制作イメージメモ

やせるくん（仮称）

・名前(name)を入力
・年齢(age)を入力
・身長(height)を入力
・体重(weight)を入力
＝基礎代謝（bmr）を概算

・目標体重(goal)を設定
＝基礎代謝だけで目指した場合の目標達成日数を算定

・毎日の食事量を入力
＝概算のみ［たべてない［0kcal］／かるく[250]／ふつうに[500]／おおめ[750]／ガッツリ[1000]／デカ盛り[1500]／彦麿呂[2000]］
・朝食(bf)をプルダウンまたは記述で入力
・昼食(lc)をプルダウンまたは記述で入力
・夕食(dn)をプルダウンまたは記述で入力

・行なった運動(burned）を入力
－移動(moving)
・徒歩 15分[50kcal]
・自転車 15分[70kcal]
・自動車 15分[15kcal]

－運動(exercise)
・ジム 30分[200](8.0METs)
・水泳 30分[600](9.0METs)
・走る 30分[200](7.0METs)

－仕事(work)
・デスクワーク 1時間[50kcal]
・立ち仕事 1時間[75kcal]
・フィールドワーク 1時間[100kcal]
・職人仕事 1時間[300kcal]

朝食(bf)（たべてない／ちょっとだけ／ふつうに／おおめで／ガッツリ／デカ盛り／彦麿呂）
昼食(lc)（たべてない／ちょっとだけ／ふつうに／おおめで／ガッツリ／デカ盛り／彦麿呂）
夕食(dn)（たべてない／ちょっとだけ／ふつうに／おおめで／ガッツリ／デカ盛り／彦麿呂）

＝摂取カロリー（cc=Consumed calories）

目標までの日数を概算

＊＊＊＊



# 参考資料

■基礎代謝(BMR)の計算式：
https://keisan.casio.jp/exec/system/1161228736
計算式ハリス・ベネディクト方程式(改良版)を使って基礎代謝量を計算しています。
男性： 13.397×体重kg＋4.799×身長cm−5.677×年齢+88.362
女性： 9.247×体重kg＋3.098×身長cm−4.33×年齢+447.593

■食事のカロリーの摂取量計算：
https://www.kondatekun.com/recipe/calorie.php

■消費カロリーの計算式：
https://keisan.casio.jp/exec/system/1161228742
