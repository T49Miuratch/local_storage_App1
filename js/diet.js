//基礎代謝BMR計算式






//1.Save クリックイベント

$("#save").on("click", function(){

    const key = $("#key").val();
    console.log(key,"keyの入力内容だよ")
    const value = $("#memo").val();
    console.log(value,"memoの入力内容だぜ")
    localStorage.setItem(key, value);
    
    const html =
    
    `<tr><th>${key}</th><td>${value}</td></tr>`
    
    $("#list").append(html)
    
    $("#key").append(html)
    $("#value").append(html)
    
    });
    
    //ローカルストレージへの保存
    
    
    //2.clear クリックイベント
    
    $("#clear").on("click",function(){
    
        localStorage.clear();
        $("#list").empty();
    
    });
    
    //2.2.5.list clear クリックイベント
    
    $("#textclear").on("click",function(){
    
    $("#key").val(' ');
    $("#memo").val(' ')
    
    });
    
    //2.5.list clear クリックイベント
    
    $("#listclear").on("click",function(){
    
        $("#list").empty()
    
    });
    
    //3.ページ読み込み：保存データ取得表示
    
    for (let i = 0; i < localStorage.length; i++){
    
        const key = localStorage.key(i);
        const value = localStorage.getItem(key)
    
        const html =`
    
    <tr><th>${key}</th>
        <td>${value}</td>
        </tr>
        `
    
        $("#list").append(html)
    
    }