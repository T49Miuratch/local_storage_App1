

    $(document).ready(function() {
        // ページロード時にlocalstorageから保存された値を読み込む
        loadLocalStorage();
  
        // 計算ボタンのクリックイベント
        $("#calculateButton").click(function() {
          calculate();
        });
  
        // 計算結果を表示する関数
        function calculate() {
          var height = parseFloat($("#height").val());
          var weight = parseFloat($("#weight").val());
          var age = parseFloat($("#age").val());
          var gender = $("input[name='gender']:checked").val();
          var name = $("#name").val();
  
          if (isNaN(height) || isNaN(weight) || isNaN(age)) {
            $("#result").text("計算エラー");
            return;
          }
  
          var result;
          var timestamp = new Date().toLocaleString(); // 保存ボタンを押した時点の日時を取得
  
          if (gender === "male") {
            result = Math.floor(13.397 * weight + 4.799 * height - 5.677 * age + 88.362);
          } else if (gender === "female") {
            result = Math.floor(9.247 * weight + 3.098 * height - 4.33 * age + 447.593);
          } else {
            result = "";
          }
  
          // 移動項目の計算結果を追加
          var movement = parseFloat($("#movement").val());
          if (!isNaN(movement)) {
            result += movement;
          }
  
          // 仕事項目の計算結果を追加
          var work = parseFloat($("#work").val());
          if (!isNaN(work)) {
            result += work;
          }
  
          // 運動項目の計算結果を追加
          var exercise = parseFloat($("#exercise").val());
          if (!isNaN(exercise)) {
            result += exercise;
          }
  
          // 結果を表示
          $("#result").text(result);
          
          // 1000で割った数値を表示
          var dividedResult = (result / 1000).toFixed(2);
          $("#dividedResult").text(dividedResult);
  
          // 結果とタイムスタンプを保存
          saveToLocalStorage(result, timestamp);
  
          // LocalStorageの保存内容を表示
          displayLocalStorage();
        }
  
        // LocalStorageから値を読み込んでフォームに設定
        function loadLocalStorage() {
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
          if (localStorage.getItem("name")) {
            $("#name").val(localStorage.getItem("name"));
          }
        }
  
        // LocalStorageに結果とタイムスタンプを保存
        function saveToLocalStorage(result, timestamp) {
          localStorage.setItem("height", $("#height").val());
          localStorage.setItem("weight", $("#weight").val());
          localStorage.setItem("age", $("#age").val());
          localStorage.setItem("gender", $("input[name='gender']:checked").val());
          localStorage.setItem("name", $("#name").val());
  
          var savedData = localStorage.getItem("savedData");
          if (savedData) {
            savedData = JSON.parse(savedData);
          } else {
            savedData = [];
          }
  
          var data = {
            result: result,
            timestamp: timestamp
          };
  
          savedData.push(data);
          localStorage.setItem("savedData", JSON.stringify(savedData));
        }
  
        // LocalStorageの保存内容を表示
        function displayLocalStorage() {
          var savedData = localStorage.getItem("savedData");
          if (savedData) {
            savedData = JSON.parse(savedData);
            var output = "";
            for (var i = 0; i < savedData.length; i++) {
              var data = savedData[i];
              output += "<div>結果: " + data.result + "（カツ丼換算" + (data.result / 1000).toFixed(2) + "個まで）, 保存日時: " + data.timestamp +
                " <button class='deleteButton' data-index='" + i + "'>削除</button></div>";
            }
            $("#savedData").html(output);
          }
        }
  
        // 保存データの削除
        function deleteSavedData(index) {
          var savedData = localStorage.getItem("savedData");
          if (savedData) {
            savedData = JSON.parse(savedData);
            savedData.splice(index, 1);
            localStorage.setItem("savedData", JSON.stringify(savedData));
            displayLocalStorage();
          }
        }
  
        // 削除ボタンのクリックイベント（動的に生成された要素にも対応）
        $(document).on("click", ".deleteButton", function() {
          var index = $(this).data("index");
          deleteSavedData(index);
        });
      });