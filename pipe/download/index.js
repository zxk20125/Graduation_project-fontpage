export default function download(option) {

    var iframeName = 'abc' + new Date().getTime(),
        $iframe = $('<iframe src="about:blank" name="' + iframeName + '" style="display: none"/>'),
        $form = $('<form/>'),
        data = option.data,
        i, k, item, items, $input;
    $form.attr({
        method: option.type,
        action: option.url,
        target: iframeName,
    });

    for (i in data) {
        if (data.hasOwnProperty(i)) {
            if ($.isArray(data[i])) {
                for (items = data[i], k = items.length; item = items[--k];) {
                    $input = $('<input name="' + i + '"/>');
                    $input.val(item);
                    $form.append($input);
                }
            } else {
                $input = $('<input name="' + i + '"/>');
                $input.val(data[i]);

                $form.append($input);
            }
        }
    }

    $form.append('<input name="_csrf" value="' + $axios.defaults.headers.common["X-CSRF-TOKEN"] + '"/>');


    // $input = null;
    $iframe.appendTo('body');
    $form.appendTo($iframe);
    console.log($form)
    $form.submit();

    $iframe.on('load', function (e) {
        var response;
        try {
            response = e.currentTarget.contentWindow.document.body.innerText;
            response = JSON.parse(response);
        } catch (e) {
            response = {
                status: false,
                errorMsg: e.message,
                content: null
            };
        }
        console.log('onload')
        option.success(response);
        $iframe && $iframe.remove();
        return
    });

    // console.log(window.event.currentTarget.contentWindow.document.body.innerText)
    var response1;
    option.success(response1={status : 200});


};