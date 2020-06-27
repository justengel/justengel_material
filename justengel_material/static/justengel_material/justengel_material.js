function is_small(){
    // Return if the screen size is small
    var mq = window.matchMedia('(max-width: 600px)');
    return !!mq.matches;
}

function turn_off_container(){
    $('.container').toggleClass('container had-container');
    $('.card.hoverable').toggleClass('hoverable had-hoverable');
}

function turn_on_container(){
    $('.had-container').toggleClass('container had-container');
    $('.card.hoverable').toggleClass('hoverable had-hoverable');
}

function check_size_for_container(){
    if (is_small()){
        // Window is small
        turn_off_container();
    } else {
        // Window is large
        turn_on_container();
    }
}


// ========== Card Overflow ==========
function check_card_reveal(){
    /* Check every card to see if it's contents overflow. If a card's contents overflow the add a card reveal div. */

    // Get all cards
    var cards = document.querySelectorAll('.card_block');

    // Loop through each card
    [].forEach.call(cards, function(card) {
        // Get the card contents
        var content = card.querySelector('.card-content');
        var title = content.querySelector('.card-title');
        var value = content.querySelector('.card-subcontent');

        // Check the card contents
        if (has_overflow(content)){
            // Create the card reveal content and add it to the card
            var reveal_content = document.createElement('div');
            reveal_content.className = 'card-reveal';
            reveal_content.style.cssText = 'overflow-y: scroll;';

            var reveal_title = document.createElement('span');
            reveal_title.className = 'card-title grey-text text-darken-4';
            reveal_title.innerHTML = title.innerHTML;

            var reveal_close = document.createElement('i');
            reveal_close.className = 'demo-icons right';
            reveal_close.innerText = "close";
            reveal_title.appendChild(reveal_close);
            reveal_content.appendChild(reveal_title);

            var reveal_sub = document.createElement('div');
            reveal_sub.className = 'card-subcontent';
            reveal_sub.innerHTML = value.innerHTML;
            reveal_content.appendChild(reveal_sub);

            card.appendChild(reveal_content);

            // Make the card title an activator for the card reveal
            content.className = content.className + ' activator';
            title.className = title.className + ' activator';
            value.className = value.className + ' activator';

            // Make the old context hide overflow
            content.style.cssText = 'overflow-y: hidden';
        }
    });
}
function has_overflow_y(e) {
     return (e.offsetHeight < e.scrollHeight);
}

function has_overflow_x(e){
    return (e.offsetWidth < e.scrollWidth);
}

function has_overflow(e){
    return has_overflow_y(e) || has_overflow_x(e);
}


// ========== Scrollspy ==========
function check_table_of_contents(){
    /* Check for scrollspy headers to make a table of contents. */

    // Get the table of contents element
    var table = document.querySelector('.table-of-contents');

    // Make sure the table of contents exists first.
    if (table != null) {
        // Get all of the scrollspy headers.
        var headers = document.querySelectorAll('.scrollspy');

        // Loop through each header
        [].forEach.call(headers, function(header) {
            var text = header.id;
            if (!text){
                text = header.innerText;
                header.id = text.replace(/[^A-Z0-9]/ig, "_");
            }

            // Create header links
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = '#' + header.id;
            a.innerText = text;

            // Put the links in the table of contents.
            li.appendChild(a);
            table.appendChild(li);
        });
    }
}


// ========== Date Time picker ==========
function add_class(selector, cls_name){
    var elems = document.querySelectorAll(selector);
    elems.forEach((inp) => {
        var arr = inp.className.split(' ');
        if(arr.indexOf(cls_name) == -1){
            inp.className += ' ' + cls_name;
        }
    });
}

function run_datetime_picker(elem){
    var value = elem.text;

}

function check_pickers(){
    // Find all date pickers.
    add_class('input[type="date"]', 'datepicker');
    add_class('input[type="time"]', 'timepicker');
    add_class('input[type="datetime-local"]', 'datetimepicker');

    // Make a date and time picker
    document.addEventListener('DOMContentLoaded', function(){
        var elems = document.querySelectorAll('.datetimepicker');
        // var date_instance, time_instance;

        elems.forEach((inp) => {
            date_instance = M.Datepicker.init(inp);
            time_instance = M.Timepicker.init(inp);

            // Remove all event listeners by cloneing the node
            // var new_element = inp.cloneNode(true);
            // inp.parentNode.replaceChild(new_element, inp);
            // inp = new_element;

            date_instance.options.onClose = function run_time_picker(e){
                date_val = date_instance.toString();
                time_val = get_time(time_instance);
                inp.value = date_val + ' ' + time_val;
                time_instance.open();
            };

            time_instance.options.onCloseEnd = function end_time_picker(e){
                date_val = date_instance.toString();
                time_val = get_time(time_instance);
                inp.value = date_val + ' ' + time_val;
            };

            inp.onclick = function run_datetime_picker(e){
                date_instance = M.Datepicker.getInstance(e.target);
                time_instance = M.Timepicker.getInstance(e.target);
                time_instance.close();
            };
        });
    });
}

function get_time(time_instance) {
    var t = time_instance.time;
    var a = time_instance.amOrPm;
    if(a === undefined || a == null){
        a = 'AM'
    }
    if(t === undefined || t == null){
        return '12:00 ' + a;
    }
    return t + ' ' + a;
}
