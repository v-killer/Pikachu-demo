!function () {
    var duration = 20
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
    /*
    *首先，需要准备皮卡丘的皮
    */
    .preview{
        height: 100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFE600;
    }
    .wrapper{
        width:  100%;
        height: 165px;
        position: relative;
    }
    /*
    *接下来，画皮卡丘的鼻子
    */
    .nose{
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        height: 28px;
        margin-left: -11px;
    }
    /*
    *接下来，画皮卡丘的眼睛
    */
    .eye{
        width: 49px;
        height: 49px;
        background: rgb(46, 46, 46);
        border-radius: 50%;
        border: 2px solid #000000;
        position: absolute;
    }
    /*
    *左眼在左边(废话)
    */
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    /*
    *右眼在右边(废话)
    */
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    /*
    *眼睛里面的珠子
    */
    .eye::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
    }
    /*
    *然后，画皮卡丘的脸
    */
    .face{
        width: 69px;
        height: 68px;
        background: #FF0000;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
    }
    /*
    *将脸放到正确的位置
    */
    .face.left{
        right: 50%;
        top: 85px;
        margin-right: 116px;
    }
    .face.right{
        left: 50%;
        top: 85px;
        margin-left: 116px;
    }
    /*
    *上嘴唇
    */
    .upperLip{
        height: 20px;
        width: 80px;
        border: 3px solid black;
        background: #FFE600;
        position: absolute;
        top: 50px;
    }
    .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 20px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    .upperLip.right{
        left: 50%;    
        border-bottom-right-radius: 40px 20px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    /*
    *下嘴唇
    */
    .lowerLip-wrapper{
        bottom: 0;
        left: 50%;
        margin-left: -150px;
        height: 110px;
        position: absolute;
        overflow: hidden;
        width: 300px;
    }
    .lowerLip{
        width: 300px;
        height: 3500px;
        background: #9B000A;
        border-radius: 200px/2000px;
        border: 2px solid black;
        bottom: 0;
        position: absolute;
        overflow: hidden;
    }
    /*
    *舌头
    */
    .lowerLip::after{
        content: "";
        position: absolute;
        bottom: -15px;
        width: 100px;
        height: 100px;
        background: #FF485F;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
    
    }
    /*
    *好啦，皮卡丘完成啦
    */
`
    writeCode('', code)

    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
            case 'fast': 
                duration = 10
                break
        }
    })

}.call()
