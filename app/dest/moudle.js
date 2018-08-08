define(function() {
    var box = document.querySelector('#box');
    var pics = box.querySelector('ul').children;
    var nums = box.querySelector('ol').children;
    var nextBtn = box.querySelector('#right');
    var prevBtn = box.querySelector('#left');
    var count = 0;
    return {
        boultNext: function() {
            nextBtn.onclick = function() {
                count++;
                if (count > pics.length - 1) count = 0;
                for (var i = 0; i < pics.length; i++) {
                    pics[i].style.display = 'none';
                    nums[i].className = "";
                }
                pics[count].style.display = 'block';
                nums[count].className = 'bg';
            }
        },
        boultPrev: function() {
            prevBtn.onclick = function() {
                count--;
                if (count < 0) count = pics.length - 1;
                for (var i = 0; i < pics.length; i++) {
                    pics[i].style.display = 'none';
                    nums[i].className = "";
                }
                pics[count].style.display = 'block';
                nums[count].className = 'bg';
            }

        },
        auto: function() {
            setInterval(function() {
                count++;
                if (count > pics.length - 1) count = 0;
                for (var i = 0; i < pics.length; i++) {
                    pics[i].style.display = 'none';
                    nums[i].className = "";
                }
                pics[count].style.display = 'block';
                nums[count].className = 'bg';
            }, 1000)
        }
    }
})