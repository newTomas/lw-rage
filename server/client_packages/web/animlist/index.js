﻿// Rize RP. GGame Studio. 1.10.2017
// Animations list view controller

let list = $('.list');
var total = 0;

animations.forEach(function (v, i) {
    if (i >= 1000) { return; }
    var group = $('<optgroup></optgroup>');
    group.attr('label', v[0]);
    $.each(v, function (si) {
        if (si > 0) {
            var option = $('<option></option>');
            option.val([v[0], v[si]]);
            option.text(v[si]);
            total = total + 1;

            group.append(option);
        }
    });
    list.append(group);
});

var option = $('<option></option>');
option.val(['', '']);
option.text('exit');
list.append(option);

$('.total').html(total + ' animations');

list.on('change', function (e) {
    let optionSelected = $("option:selected", this);
    let anim = optionSelected.val().split(',');
    mp.trigger('animlist:animationSelected', anim[0], anim[1]);
});