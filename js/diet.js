// ここからcgで作ったコード

$(document).ready(function() {
  // ページロード時にlocalstorageから保存された値を読み込む
  if (localStorage.getItem("namae")) {
    $("#namae").val(localStorage.getItem("namae"));
  }
  if (localStorage.getItem("height")) {
    $("#height").val(localStorage.getItem("height"));
  }
  if (localStorage.getItem("weight")) {
    $("#weight").val(localStorage.getItem("weight"));
  }
  if (localStorage.getItem("age")) {
    $("#age").val(localStorage.getItem("age"));
  }
  if (localStorage.getItem("gender")) {
    $("input[name='gender'][value='" + localStorage.getItem("gender") + "']").prop("checked", true);
  }
  if (localStorage.getItem("result")) {
    $("#result").val(localStorage.getItem("result"));
  }

  // 計算結果を表示する関数
  function calculate() {
    var height = parseFloat($("#height").val());
    console.log(height,"heightの入力内容だよ")
    var weight = parseFloat($("#weight").val());
    console.log(weight,"weightの入力内容だよ")
    var age = parseFloat($("#age").val());
    console.log(age,"ageの入力内容だよ")
    var gender = $("input[name='gender']:checked").val();
    console.log(gender,"genderの入力内容だよ")

    var result;
    if (gender === "male") {
      result = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
    } else if (gender === "female") {
      result = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
    }

    console.log(result,"resultの入力内容だよ")

    // 結果を表示
    $(result).text(result.toFixed(2));
  }

  // 入力内容をクリアするボタンのクリックイベント
  $("#clearButton").click(function() {
    $("#namae").val("");
    $("#height").val("");
    $("#weight").val("");
    $("#age").val("");
    $("#result").val("");
  });

  // 入力内容をlocalstorageに保存するボタンのクリックイベント
  $("#saveButton").click(function() {
    var namae = $("#namae").val();
    var height = $("#height").val();
    var weight = $("#weight").val();
    var age = $("#age").val();
    var gender = $("input[name='gender']:checked").val();
    var result = $("#reslut").val();

    localStorage.setItem("namae", namae);
    localStorage.setItem("height", height);
    localStorage.setItem("weight", weight);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
    localStorage.setItem("result", result);
  });

  // 入力内容が変更された時に計算を実行
  $("#height, #weight, #age, input[name='gender']").on("input", function() {
    calculate();
  });

  // 初回の計算実行
  calculate();
});

// ここまでcgで作ったコード


// //基礎代謝BMR計算式クリックイベント

$("#saveButton").on("click", function(){

    console.log("セーブボタンが押されたよ")

    //日時を取得
    var y = new Date().getFullYear();
    var m = new Date().getMonth() + 1;
    var d = new Date().getDate();
    var w = new Date().getDay();
    var wd = ["日","月","火","水","木","金","土"];
    var youbi = wd[w];
    var h = new Date().getHours();
    var min = new Date().getMinutes();
    $("#nichiji").html(y + "年" + m + "月" + d + "日" + "（" + youbi + "）" + h + ":" + min);

    console.log(y + "年" + m + "月" + d + "日" + "（" + youbi + "）" + h + ":" + min)

    localStorage.setItem(namae, age, height, weight);
    const html =

    `
    <tr>
    <td>${y + "年" + m + "月" + d + "日" + "（" + youbi + "）" + h + ":" + min}</td>
    <td>${namae}</td>

    <td>${age}</td>
    <td>${height}</td>
    <td>${weight}</td>
    <td>${result}</td></tr>
    `

    $("#list").append(html)
    
    $("#date").append(html)
    $("#namae").append(html)
    $("#age").append(html)
    $("#height").append(html)
    $("#weight").append(html)
    $("#result").append(html)

});


// // //1.Save クリックイベント

// // $("#save").on("click", function(){

// //     const key = $("#key").val();
// //     console.log(key,"keyの入力内容だよ")
// //     const value = $("#memo").val();
// //     console.log(value,"memoの入力内容だぜ")
// //     localStorage.setItem(key, value);
    
// //     const html =
    
// //     `<tr><th>${key}</th><td>${value}</td></tr>`
    
// //     $("#list").append(html)
    
// //     $("#key").append(html)
// //     $("#value").append(html)
    
// //     });
    
//     //ローカルストレージへの保存
    
    
    //2.clear クリックイベント
    
    $("#clear").on("click",function(){
    
        localStorage.clear();
        $("#list").empty();
    
    });
    
//     //2.2.5.list clear クリックイベント
    
//     $("#textclear").on("click",function(){
    
//     $("#key").val(' ');
//     $("#memo").val(' ')
    
//     });
    
//     //2.5.list clear クリックイベント
    
//     $("#listclear").on("click",function(){
    
//         $("#list").empty()
    
//     });
    
//     //3.ページ読み込み：保存データ取得表示
    
//     for (let i = 0; i < localStorage.length; i++){
    
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key)
    
//         const html =`
    
//     <tr><th>${key}</th>
//         <td>${value}</td>
//         </tr>
//         `
    
//         $("#list").append(html)
    
//     }