$(function(){

//ここから画像プレビュー
  let input_length = 0
  function readURL(input) {
    let app_img = $(`<div class="image">
                    <img id="img_prev" height="100" width="100" src="">
                    <div class="input">
                    <div class="kara"></div>
                    <input value="" type="hidden" name="product[images_attributes][${input_length-1}][_destroy]" id="product_images_attributes_0__destroy">
                    <button class="delete" type="button"></button>
                    </div>
                    </div>`);

    let app_input = $(`<input class="user_img" type="file" name="product[images_attributes][${input_length}][image]">`);

    $('.images').prepend(app_img)
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        $('#img_prev').attr('src', e.target.result);
      }
      $('.new_input').append(app_input);
      reader.readAsDataURL(input.files[0]);
    }
  }

  $(document).on("change", ".user_img", function(){
    $(this).css('display', 'none');
    input_length = $(this).parent().parent().children().length;
    readURL(this);
  });
//ここまで画像プレビュー

//ここから削除機能
  $(document).on("click", ".delete", function(){
    let delete_img = $(this).parent().parent();
    let delete_add = $(this).parent().children()[1];

    $(delete_img).css('display', 'none');
    $(delete_add).attr('value', "1");
  });
//ここまで削除機能

})