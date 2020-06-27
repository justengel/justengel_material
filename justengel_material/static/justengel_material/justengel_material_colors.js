
var COLORS = {
    "materialize-red": "#e51c23", "materialize-red lighten-1": "#ea454b", "materialize-red lighten-2": "#ee6e73",
    "materialize-red lighten-3": "#f3989b", "materialize-red lighten-4": "#f8c1c3",
    "materialize-red lighten-5": "#fdeaeb", "materialize-red darken-1": "#d0181e",
    "materialize-red darken-2": "#b9151b", "materialize-red darken-3": "#a21318", "materialize-red darken-4": "#8b1014",

    "red lighten-5": "#ffebee", "red lighten-4": "#ffcdd2", "red lighten-3": "#ef9a9a", "red lighten-2": "#e57373",
    "red lighten-1": "#ef5350", "red": "#f44336", "red darken-1": "#e53935", "red darken-2": "#d32f2f",
    "red darken-3": "#c62828", "red darken-4": "#b71c1c", "red accent-1": "#ff8a80", "red accent-2": "#ff5252",
    "red accent-3": "#ff1744", "red accent-4": "#d50000",

    "pink lighten-5": "#fce4ec", "pink lighten-4": "#f8bbd0", "pink lighten-3": "#f48fb1", "pink lighten-2": "#f06292",
    "pink lighten-1": "#ec407a", "pink": "#e91e63", "pink darken-1": "#d81b60", "pink darken-2": "#c2185b",
    "pink darken-3": "#ad1457", "pink darken-4": "#880e4f", "pink accent-1": "#ff80ab", "pink accent-2": "#ff4081",
    "pink accent-3": "#f50057", "pink accent-4": "#c51162",

    "purple lighten-5": "#f3e5f5", "purple lighten-4": "#e1bee7", "purple lighten-3": "#ce93d8",
    "purple lighten-2": "#ba68c8", "purple lighten-1": "#ab47bc", "purple": "#9c27b0", "purple darken-1": "#8e24aa",
    "purple darken-2": "#7b1fa2", "purple darken-3": "#6a1b9a", "purple darken-4": "#4a148c",
    "purple accent-1": "#ea80fc", "purple accent-2": "#e040fb", "purple accent-3": "#d500f9",
    "purple accent-4": "#aa00ff",

    "deep-purple lighten-5": "#ede7f6", "deep-purple lighten-4": "#d1c4e9", "deep-purple lighten-3": "#b39ddb",
    "deep-purple lighten-2": "#9575cd", "deep-purple lighten-1": "#7e57c2", "deep-purple": "#673ab7",
    "deep-purple darken-1": "#5e35b1", "deep-purple darken-2": "#512da8", "deep-purple darken-3": "#4527a0",
    "deep-purple darken-4": "#311b92", "deep-purple accent-1": "#b388ff", "deep-purple accent-2": "#7c4dff",
    "deep-purple accent-3": "#651fff", "deep-purple accent-4": "#6200ea",

    "indigo lighten-5": "#e8eaf6", "indigo lighten-4": "#c5cae9", "indigo lighten-3": "#9fa8da",
    "indigo lighten-2": "#7986cb", "indigo lighten-1": "#5c6bc0", "indigo": "#3f51b5", "indigo darken-1": "#3949ab",
    "indigo darken-2": "#303f9f", "indigo darken-3": "#283593", "indigo darken-4": "#1a237e",
    "indigo accent-1": "#8c9eff", "indigo accent-2": "#536dfe", "indigo accent-3": "#3d5afe",
    "indigo accent-4": "#304ffe",

    "blue lighten-5": "#e3f2fd", "blue lighten-4": "#bbdefb", "blue lighten-3": "#90caf9", "blue lighten-2": "#64b5f6",
    "blue lighten-1": "#42a5f5", "blue": "#2196f3", "blue darken-1": "#1e88e5", "blue darken-2": "#1976d2",
    "blue darken-3": "#1565c0", "blue darken-4": "#0d47a1", "blue accent-1": "#82b1ff", "blue accent-2": "#448aff",
    "blue accent-3": "#2979ff", "blue accent-4": "#2962ff",

    "light-blue lighten-5": "#e1f5fe", "light-blue lighten-4": "#b3e5fc", "light-blue lighten-3": "#81d4fa",
    "light-blue lighten-2": "#4fc3f7", "light-blue lighten-1": "#29b6f6", "light-blue": "#03a9f4",
    "light-blue darken-1": "#039be5", "light-blue darken-2": "#0288d1", "light-blue darken-3": "#0277bd",
    "light-blue darken-4": "#01579b", "light-blue accent-1": "#80d8ff", "light-blue accent-2": "#40c4ff",
    "light-blue accent-3": "#00b0ff", "light-blue accent-4": "#0091ea",

    "cyan lighten-5": "#e0f7fa", "cyan lighten-4": "#b2ebf2", "cyan lighten-3": "#80deea", "cyan lighten-2": "#4dd0e1",
    "cyan lighten-1": "#26c6da", "cyan": "#00bcd4", "cyan darken-1": "#00acc1", "cyan darken-2": "#0097a7",
    "cyan darken-3": "#00838f", "cyan darken-4": "#006064", "cyan accent-1": "#84ffff", "cyan accent-2": "#18ffff",
    "cyan accent-3": "#00e5ff", "cyan accent-4": "#00b8d4",

    "teal lighten-5": "#e0f2f1", "teal lighten-4": "#b2dfdb", "teal lighten-3": "#80cbc4", "teal lighten-2": "#4db6ac",
    "teal lighten-1": "#26a69a", "teal": "#009688", "teal darken-1": "#00897b", "teal darken-2": "#00796b",
    "teal darken-3": "#00695c", "teal darken-4": "#004d40", "teal accent-1": "#a7ffeb", "teal accent-2": "#64ffda",
    "teal accent-3": "#1de9b6", "teal accent-4": "#00bfa5",

    "green lighten-5": "#e8f5e9", "green lighten-4": "#c8e6c9", "green lighten-3": "#a5d6a7",
    "green lighten-2": "#81c784", "green lighten-1": "#66bb6a", "green": "#4caf50", "green darken-1": "#43a047",
    "green darken-2": "#388e3c", "green darken-3": "#2e7d32", "green darken-4": "#1b5e20", "green accent-1": "#b9f6ca",
    "green accent-2": "#69f0ae", "green accent-3": "#00e676", "green accent-4": "#00c853",

    "light-green lighten-5": "#f1f8e9", "light-green lighten-4": "#dcedc8", "light-green lighten-3": "#c5e1a5",
    "light-green lighten-2": "#aed581", "light-green lighten-1": "#9ccc65", "light-green": "#8bc34a",
    "light-green darken-1": "#7cb342", "light-green darken-2": "#689f38", "light-green darken-3": "#558b2f",
    "light-green darken-4": "#33691e", "light-green accent-1": "#ccff90", "light-green accent-2": "#b2ff59",
    "light-green accent-3": "#76ff03", "light-green accent-4": "#64dd17",

    "lime lighten-5": "#f9fbe7", "lime lighten-4": "#f0f4c3", "lime lighten-3": "#e6ee9c", "lime lighten-2": "#dce775",
    "lime lighten-1": "#d4e157", "lime": "#cddc39", "lime darken-1": "#c0ca33", "lime darken-2": "#afb42b",
    "lime darken-3": "#9e9d24", "lime darken-4": "#827717", "lime accent-1": "#f4ff81", "lime accent-2": "#eeff41",
    "lime accent-3": "#c6ff00", "lime accent-4": "#aeea00",

    "yellow lighten-5": "#fffde7", "yellow lighten-4": "#fff9c4", "yellow lighten-3": "#fff59d",
    "yellow lighten-2": "#fff176", "yellow lighten-1": "#ffee58", "yellow": "#ffeb3b", "yellow darken-1": "#fdd835",
    "yellow darken-2": "#fbc02d", "yellow darken-3": "#f9a825", "yellow darken-4": "#f57f17",
    "yellow accent-1": "#ffff8d", "yellow accent-2": "#ffff00", "yellow accent-3": "#ffea00",
    "yellow accent-4": "#ffd600",

    "amber lighten-5": "#fff8e1", "amber lighten-4": "#ffecb3", "amber lighten-3": "#ffe082",
    "amber lighten-2": "#ffd54f", "amber lighten-1": "#ffca28", "amber": "#ffc107", "amber darken-1": "#ffb300",
    "amber darken-2": "#ffa000", "amber darken-3": "#ff8f00", "amber darken-4": "#ff6f00", "amber accent-1": "#ffe57f",
    "amber accent-2": "#ffd740", "amber accent-3": "#ffc400", "amber accent-4": "#ffab00",

    "orange lighten-5": "#fff3e0", "orange lighten-4": "#ffe0b2", "orange lighten-3": "#ffcc80",
    "orange lighten-2": "#ffb74d", "orange lighten-1": "#ffa726", "orange": "#ff9800", "orange darken-1": "#fb8c00",
    "orange darken-2": "#f57c00", "orange darken-3": "#ef6c00", "orange darken-4": "#e65100",
    "orange accent-1": "#ffd180", "orange accent-2": "#ffab40", "orange accent-3": "#ff9100",
    "orange accent-4": "#ff6d00",

    "deep-orange lighten-5": "#fbe9e7", "deep-orange lighten-4": "#ffccbc", "deep-orange lighten-3": "#ffab91",
    "deep-orange lighten-2": "#ff8a65", "deep-orange lighten-1": "#ff7043", "deep-orange": "#ff5722",
    "deep-orange darken-1": "#f4511e", "deep-orange darken-2": "#e64a19", "deep-orange darken-3": "#d84315",
    "deep-orange darken-4": "#bf360c", "deep-orange accent-1": "#ff9e80", "deep-orange accent-2": "#ff6e40",
    "deep-orange accent-3": "#ff3d00", "deep-orange accent-4": "#dd2c00",

    "brown lighten-5": "#efebe9", "brown lighten-4": "#d7ccc8", "brown lighten-3": "#bcaaa4",
    "brown lighten-2": "#a1887f", "brown lighten-1": "#8d6e63", "brown": "#795548", "brown darken-1": "#6d4c41",
    "brown darken-2": "#5d4037", "brown darken-3": "#4e342e", "brown darken-4": "#3e2723",

    "grey lighten-5": "#fafafa", "grey lighten-4": "#f5f5f5", "grey lighten-3": "#eeeeee", "grey lighten-2": "#e0e0e0",
    "grey lighten-1": "#bdbdbd", "grey": "#9e9e9e", "grey darken-1": "#757575", "grey darken-2": "#616161",
    "grey darken-3": "#424242", "grey darken-4": "#212121",

    "blue-grey lighten-5": "#eceff1", "blue-grey lighten-4": "#cfd8dc", "blue-grey lighten-3": "#b0bec5",
    "blue-grey lighten-2": "#90a4ae", "blue-grey lighten-1": "#78909c", "blue-grey": "#607d8b",
    "blue-grey darken-1": "#546e7a", "blue-grey darken-2": "#455a64", "blue-grey darken-3": "#37474f",
    "blue-grey darken-4": "#263238",


    "black": "#000000", "white": "#ffffff", "A transparent": "N",
};


var DYNAMIC_CSS = `
<style id="materialize_dynamic_style">
/* ========== Primary Color ========== */
.primary-color{
    background-color: {{ primary_color }} !important;
}
.primary-color-text{
    color: {{ primary_color }} !important;
}

/* Places where primary color is used */
blockquote {
  border-left: 5px solid {{ primary_color }};
}
.pagination a.active{
    background-color: {{ primary_color }};
}
nav {
    background-color: {{ primary_color }};
}
.sidenav .collapsible-body > ul:not(.collapsible) > li.active,
.sidenav.sidenav-fixed .collapsible-body > ul:not(.collapsible) > li.active {
    background-color: {{ primary_color }};
}
.table-of-contents a:hover {
    border-left: 1px solid {{ primary_color }};
}
.table-of-contents a.active {
    border-left: 2px solid {{ primary_color }};
}
.tap-target {
    background-color: {{ primary_color }};
}

/* Primary color is tab variable */
.tabs .tab a:hover, .tabs .tab a.active {
  color: {{ tabs_text_color }};
}
.tabs .tab a {
  color: {{ tabs_text_color_active }}
}
.tabs .tab.disabled a,
.tabs .tab.disabled a:hover {
  color: {{ tabs_text_color_disabled }}
}
.tabs .indicator{
    background-color: {{ tabs_underline_color }};
}

/* Primary color is footer variable */
.page-footer {
    background-color: {{ footer_bg_color }};
}


/* ========== Secondary Color ========== */
.secondary-color{
    background-color: {{ secondary_color }} !important;
}
.secondary-color-text{
    color: {{ secondary_color }} !important;
}

/* Places where secondary color is used */
.secondary-content {
    color: {{ secondary_color }};
}

/* Secondary color is badge variable */
span.badge.new {
    background-color: {{ badge_bg_color }};
}

/* Secondary color is button variable */
.btn:focus, .btn-floating:focus {
    background-color: {{ button_raised_background_focus }};
}
.btn {
    background-color: {{ button_raised_background }};
}
.btn:hover {
    background-color: {{ button_raised_background_hover }};
}
.btn-floating:hover {
    background-color: {{ button_floating_background_hover }};
}
.btn-floating {
    background-color: {{ button_floating_background }};
}
.fixed-action-btn .fab-backdrop {
    background-color: {{ button_floating_background }};
}

/* Secondary color is datepicker variable */
.datepicker-date-display {
    background-color: {{ secondary_color }};
}
.datepicker-table td.is-today {
    color: {{ secondary_color }};
}
.datepicker-table td.is-selected{
    background-color: {{ secondary_color }};
}
.datepicker-done{
    color: {{ secondary_color }};
}
/* Uses the right variable */
.datepicker-day-button:focus {
    background-color: {{ datepicker_day_focus }};
}

/* Secondary color is dropdown variable */
.dropdown-content> a, .dropdown-content>span {
    color: {{ dropdown_color }};
}

/* Secondary color is input variable */
[type="checkbox"].filled-in:checked + span:not(.lever):after {
    border: 2px solid {{ secondary_color }};
    background-color: {{ secondary_color }};
}
[type="checkbox"].filled-in.tabbed:checked:focus + span:not(.lever):after {
    border-color: {{ secondary_color }};
    background-color: {{ secondary_color }};
}
button:focus {
  outline: none;
  background-color: {{ button_background_focus }};
}
input:not([type]):focus:not([readonly]),
input[type=text]:not(.browser-default):focus:not([readonly]),
input[type=password]:not(.browser-default):focus:not([readonly]),
input[type=email]:not(.browser-default):focus:not([readonly]),
input[type=url]:not(.browser-default):focus:not([readonly]),
input[type=time]:not(.browser-default):focus:not([readonly]),
input[type=date]:not(.browser-default):focus:not([readonly]),
input[type=datetime]:not(.browser-default):focus:not([readonly]),
input[type=datetime-local]:not(.browser-default):focus:not([readonly]),
input[type=tel]:not(.browser-default):focus:not([readonly]),
input[type=number]:not(.browser-default):focus:not([readonly]),
input[type=search]:not(.browser-default):focus:not([readonly]),
textarea.materialize-textarea:focus:not([readonly]) {
    border-bottom: 1px solid {{ input_focus_color }};
    box-shadow: 0 1px 0 0 {{ input_focus_color }};
}
input:not([type]):focus:not([readonly])+label,
input[type=text]:not(.browser-default):focus:not([readonly])+label,
input[type=password]:not(.browser-default):focus:not([readonly])+label,
input[type=email]:not(.browser-default):focus:not([readonly])+label,
input[type=url]:not(.browser-default):focus:not([readonly])+label,
input[type=time]:not(.browser-default):focus:not([readonly])+label,
input[type=date]:not(.browser-default):focus:not([readonly])+label,
input[type=datetime]:not(.browser-default):focus:not([readonly])+label,
input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,
input[type=tel]:not(.browser-default):focus:not([readonly])+label,
input[type=number]:not(.browser-default):focus:not([readonly])+label,
input[type=search]:not(.browser-default):focus:not([readonly])+label,
textarea.materialize-textarea:focus:not([readonly])+label {
    color: {{ input_focus_color }};
}
.input-field .prefix.active {
    color: {{ input_focus_color }};
}
input.select-dropdown:focus {
    border-bottom: 1px solid {{ input_focus_color }};
}

/* Secondary color is radio variable */
[type="radio"]:checked + span:after,
[type="radio"].with-gap:checked + span:after {
    background-color: {{ radio_fill_color }};
}
[type="radio"]:checked + span:after,
[type="radio"].with-gap:checked + span:before,
[type="radio"].with-gap:checked + span:after {
    border: {{ radio_border }};
}
input[type=range] + .thumb {
    background-color: {{ radio_fill_color }};
}
input[type=range] + .thumb .value {
    color: {{ radio_fill_color }};
}
/* @mixin range-thumb {
    background: {{ radio_fill_color }};
}*/
input[type=range]::-webkit-slider-thumb {
    background-color: {{ radio_fill_color }};
}
.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb {
    box-shadow: 0 0 0 10px rgba({{ radio_fill_color }}, .26);
}
.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb {
    box-shadow: 0 0 0 10px rgba({{ radio_fill_color }}, .26);
}
.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb {
    box-shadow: 0 0 0 10px rgba({{ radio_fill_color }}, .26);
}

/* Secondary color is select variable */
input.select-dropdown:focus {
    border-bottom: 1px solid {{ input_focus_color }};
}

/* Secondary color is switch variable */
.switch label input[type=checkbox]:checked + .lever:after {
    background-color: {{ switch_bg_color }};
}
.switch label .lever:before {
    background-color: {{ switch_bg_color_transparentize }};
}
input[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,
input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before {
    background-color: {{ switch_bg_color_transparentize }};
}
.switch label input[type=checkbox]:checked + .lever {
    background-color: {{ switch_checked_lever_bg }};
}

/* Secondary color is spinner variable */
.spinner-layer {
    border-color: {{ spinner_default_color }};
}

/* Secondary color is timepicker variable */
.timepicker-digital-display{
    background-color: {{ secondary_color }};
}
.timepicker-tick:hover{
    background-color: {{ timepicker_tick_hover }};
}
.timepicker-canvas line {
    stroke: {{ secondary_color }};
}
.timepicker-canvas-bearing {
    fill: {{ secondary_color }};
}
.timepicker-canvas-bg {
    fill: {{ secondary_color }};
}
.timepicker-close{
    color: {{ secondary_color }};
}

/* Secondary color is collection variable */
.collection .collection-item.active {
    background-color: {{ collection_active_bg_color }};
    color: {{ collection_active_color }};
}
.collection a.collection-item{
    color: {{ collection_link_color }};
}

/* Secondary color is progress-bar variable */
.progress {
    background-color: {{ progress_bar_color_lighten }};
}
.progress .determinate {
    background-color: {{ progress_bar_color }};
}
.progress .indeterminate {
    background-color: {{ progress_bar_color }};
}


/* ========== Success Color ========== */
.success-color{
    background-color: {{ success_color }};
}
.success-color-text{
    color: {{ success_color }};
}

input:not([type]):focus.valid ~ label,
input[type=text]:not(.browser-default):focus.valid ~ label,
input[type=password]:not(.browser-default):focus.valid ~ label,
input[type=email]:not(.browser-default):focus.valid ~ label,
input[type=url]:not(.browser-default):focus.valid ~ label,
input[type=time]:not(.browser-default):focus.valid ~ label,
input[type=date]:not(.browser-default):focus.valid ~ label,
input[type=datetime]:not(.browser-default):focus.valid ~ label,
input[type=datetime-local]:not(.browser-default):focus.valid ~ label,
input[type=tel]:not(.browser-default):focus.valid ~ label,
input[type=number]:not(.browser-default):focus.valid ~ label,
input[type=search]:not(.browser-default):focus.valid ~ label,
textarea.materialize-textarea:focus.valid ~ label {
    color: {{ input_success_color }};
}
/*
.valid-input-style {
    border-bottom: 1px solid {{ input_success_color }};
    box-shadow: 0 1px 0 0 {{ input_success_color }};
}
.custom-success-message {
    color: {{ input_success_color }};
}
*/


/* ========== Error Color ========== */
.error-color{
    background-color: {{ error_color }};
}
.error-color-text{
    color: {{ error_color }};
}

input:not([type]):focus.invalid ~ label,
input[type=text]:not(.browser-default):focus.invalid ~ label,
input[type=password]:not(.browser-default):focus.invalid ~ label,
input[type=email]:not(.browser-default):focus.invalid ~ label,
input[type=url]:not(.browser-default):focus.invalid ~ label,
input[type=time]:not(.browser-default):focus.invalid ~ label,
input[type=date]:not(.browser-default):focus.invalid ~ label,
input[type=datetime]:not(.browser-default):focus.invalid ~ label,
input[type=datetime-local]:not(.browser-default):focus.invalid ~ label,
input[type=tel]:not(.browser-default):focus.invalid ~ label,
input[type=number]:not(.browser-default):focus.invalid ~ label,
input[type=search]:not(.browser-default):focus.invalid ~ label,
textarea.materialize-textarea:focus.invalid ~ label {
    color: {{ input_error_color }};
}
/*
.invalid-input-style {
  border-bottom: {{ input_invalid_border }};
  box-shadow: 0 1px 0 0 {{ input_error_color }};
}
.custom-error-message {
    color: {{ input_error_color }};
}
*/

/* ========== Link Color ========== */
.link-color{
    background-color: {{ link_color }};
}
.link-color-text{
    color: {{ link_color }};
}

a {
    color: {{ link_color }};
}
</style>
`;

var primary_color = null;
var secondary_color = null;
var primary_color_light = null;
var primary_color_dark = null;
var success_color = null;
var error_color = null;
var link_color = null;


function change_css_colors(){
    /* Change the css colors */
    var custom_css = DYNAMIC_CSS;
    var change = {};

    if(typeof primary_color !== 'undefined' && primary_color != null && primary_color !== "None"){
        primary_color = dict_get(COLORS, primary_color, primary_color);

        if(typeof primary_color_light === 'undefined' || primary_color_light == null || primary_color_light === "None"){
            primary_color_light = lighten(primary_color, 15);
        }
        if(typeof primary_color_dark === 'undefined' || primary_color_dark == null || primary_color_dark === "None") {
            primary_color_dark = darken(primary_color, 15);
        }

        change["primary_color"] = primary_color;
        change["primary_color_light"] = primary_color_light;
        change["primary_color_dark"] = primary_color_dark;
        change["tabs_text_color"] = primary_color;
        change['tabs_underline_color'] = primary_color_light;
        change["tabs_text_color_active"] = to_rgba(get_rgba(primary_color), 0.7,);
        change["tabs_text_color_disabled"] = to_rgba(get_rgba(primary_color), 0.4,);
        change["footer_bg_color"] = primary_color;

    }
    if(typeof secondary_color !== 'undefined' && secondary_color != null && secondary_color !== 'None'){
        secondary_color = dict_get(COLORS, secondary_color, secondary_color);

        change["secondary_color"] = secondary_color;

        change["badge_bg_color"] = secondary_color;

        change["button_background_focus"] = lighten(secondary_color, 4);
        change["button_raised_background"] = secondary_color;
        change['button_raised_background_focus'] = darken(change["button_raised_background"], 10);
        change["button_raised_background_hover"] = lighten(change["button_raised_background"], 5);
        change["button_floating_background"] = secondary_color;
        change["button_floating_background_hover"] = change["button_floating_background"];

        change["datepicker_weekday_bg"] = darken(secondary_color, 7);
        change["datepicker_date_bg"] = secondary_color;
        change["datepicker_selected"] = secondary_color;
        change["datepicker_selected_outfocus"] = desaturate(lighten(secondary_color, 35), 15);
        change["datepicker_day_focus"] = transparentize(desaturate(secondary_color, 5), .75);

        change["dropdown_color"] = secondary_color;

        change["input_focus_color"] = secondary_color;

        change["radio_fill_color"] = secondary_color;
        change["radio_border"] = "2px solid " + change["radio_fill_color"];

        change["select_focus"] = "1px solid " + lighten(secondary_color, 47);

        change["switch_bg_color"] = secondary_color;
        change["switch_bg_color_transparentize"] = transparentize(change['switch_bg_color'], .85);
        change["switch_checked_lever_bg"] = desaturate(lighten(change["switch_bg_color"], 25), 25);

        change["spinner_default_color"] = secondary_color;

        change['timepicker_tick_hover'] = transparentize(secondary_color, .75);

        change["collection_active_bg_color"] = secondary_color;
        change["collection_active_color"] = lighten(secondary_color, 55);
        change["collection_link_color"] = secondary_color;

        change["progress_bar_color"] = secondary_color;
        change["progress_bar_color_lighten"] = lighten(change['progress_bar_color'], 40);
    }
    if(typeof success_color !== 'undefined' && success_color != null && success_color !== 'None'){
        success_color = dict_get(COLORS, success_color, success_color);
        change["success_color"] = success_color;
        change["input_success_color"] = success_color;
    }
    if(typeof error_color !== 'undefined' && error_color != null && error_color !== 'None'){
        error_color = dict_get(COLORS, error_color, error_color);

        change["error_color"] = error_color;
        change["input_error_color"] = error_color;
        change["input_invalid_border"] = "1px solid " + error_color;
    }
    if(typeof link_color !== 'undefined' && link_color != null && link_color !== 'None'){
        link_color = dict_get(COLORS, link_color, link_color);
        change["link_color"] = link_color
    }

    // Replace all of the dictionary values.
    custom_css = custom_css.replace(new RegExp('{{ ','g'), '{{').replace(new RegExp(' }}','g'), '}}');
    for(var key in change){
        var re = new RegExp('{{'+key+'}}','g');
        custom_css = custom_css.replace(re, change[key]);
    }

    var sheet = document.getElementById('materialize_dynamic_style');
    if(sheet == null){
        sheet = document.createElement('style');
        sheet.id = 'materialize_dynamic_style';
        document.body.appendChild(sheet);
    }
    sheet.outerHTML = custom_css;  // Remove the old script tag too (outerHTML).
}


/**
 * Return the dictionary value or default value if not found.
 *
 * @param {int} d           Dictionary to search for the name.
 * @param {String} name     Name of the key to search in the dictionary for.
 * @param {object} defaul   Default value to return if the given name is not in the dictionary.
 */
function dict_get(d, name, defaul=null){
    var val = d[name];
    if(val === undefined || val == null){
        return defaul;
    } else {
        return val;
    }
}


/**
 * Convert an integer to a 2 charater hex string
 *
 * @param {int} c     Color component value.
 */
function componentToHex(c){
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex: hex;
}


/**
 * Convert r, g, b, a values to a Hex string.
 *
 * @param {int} r     red color value.
 * @param {int} g     green color value.
 * @param {int} b     blue color value.
 * @param {int} a     alpha value (OPTIONAL).
 */
function rgbToHex(r, g, b, a){
    var a_str = '';
    if(typeof a === "undefined" || a == null){
        a_str = componentToHex(a);
    }
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b) + a_str;
}


/**
 * Convert a hex string to RGB color values.
 *
 * @param {String, Array} hex     Hex string.
 */
function hexToRgb(hex){
    var offset = 0;
    if(hex[0] === '#'){
        offset = 1;
    }

    var result = [];
    for(var i=offset; i < hex.length; i+=2){
        result.push(parseInt(hex.substr(i, 2), 16));
    }
    return result ? result : null;
}


/**
 * Find and convert the color name or hex value to an Array of r, g, b, a.
 *
 * @param {String, Array} color     Hex string, color name, or Array of rgba color values.
 */
function get_rgba(color){
    if(typeof color === "string"){
        color = dict_get(COLORS, color, color);
        color = hexToRgb(color);
    }

    if(color.length === 3){
        color.push(255);
    }
    return color
}

/**
 * Modify a color value and check the upper and lower limits.
 *
 * @param {float, int} val          Number color value for r, g, b or h, s, l.
 * @param {float, int} modify_by    Number to modify by.
 * @param {float, int} upper_lim    Upper limit for the value. Default is 1
 * @param {float, int} lower_lim    Lower limit for the value. Default is 0
 */
function modify_val(val, modify_by=0, upper_lim=1, lower_lim=0) {
    val = val + modify_by;
    if(val > upper_lim){
        return upper_lim;
    } else if(val < lower_lim){
        return lower_lim;
    } else {
        return val;
    }
}


/**
 * Lighten a color by a percentage and return the color in Hex.
 *
 * @param {String, Array} color     Hex or rgb color values.
 * @param {float, int} amount       Number between 0 and 100.
 */
function lighten(color, amount=0){
    var percent = amount/100;
    color = get_rgba(color);
    var alpha = color[3];

    var hsl = rgbToHsl(color[0], color[1], color[2]);
    var new_hsl = [hsl[0], hsl[1], modify_val(hsl[2], percent)];
    var nr = hslToRgb(new_hsl[0], new_hsl[1], new_hsl[2]);

    return '#' + componentToHex(nr[0]) + componentToHex(nr[1]) + componentToHex(nr[2]) + componentToHex(alpha);
}


/**
 * Darken a color by a percentage and return the color in Hex.
 *
 * @param {String, Array} color     Hex or rgb color values.
 * @param {float, int} amount       Number between 0 and 100.
 */
function darken(color, amount=0){
    return lighten(color, -amount);
}


/**
 * Saturate a color by a percentage and return the color in Hex.
 *
 * @param {String, Array} color     Hex or rgb color values.
 * @param {float, int} amount       Number between 0 and 100.
 */
function saturate(color, amount=0){
    var percent = amount/100;
    color = get_rgba(color);
    var alpha = color[3];

    var hsl = rgbToHsl(color[0], color[1], color[2]);
    var new_hsl = [hsl[0], modify_val(hsl[1], percent), hsl[2]];
    var nr = hslToRgb(new_hsl[0], new_hsl[1], new_hsl[2]);

    return '#' + componentToHex(nr[0]) + componentToHex(nr[1]) + componentToHex(nr[2]) + componentToHex(alpha);
}


/**
 * Desaturate a color by a percentage and return the color in Hex.
 *
 * @param {String, Array} color     Hex or rgb color values.
 * @param {float, int} amount       Number between 0 and 100.
 */
function desaturate(color, amount=0){
    return saturate(color, -amount);
}


/**
 * Increase the opacity of a color.
 *
 * @param {String, Array} color     Hex or rgb color values.
 * @param {float, int} amount       Number between 0 and 1.
 */
function opacify(color, amount=0){
    color = get_rgba(color);
    var alpha = modify_val(color[3], amount);
    return '#' + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]) + componentToHex(alpha);
}


/**
 * Increase the transparency of a color.
 *
 * @param {String, Array} color     Hex or rgb color values.
 * @param {float, int} amount       Number between 0 and 1.
 */
function transparentize(color, amount=0){
    return opacify(color, -amount);
}

/**
 * Convert the given color to a css rgba function name.
 *
 * @param {String, Array} color     Hex or rgb color values.
 * @param {float} alpha             Alpha transparency value.
 */
function to_rgba(color, alpha){
    var c = get_rgba(color);
    var a = (typeof alpha != 'undefined' && alpha != null) ? alpha : color[3];
    return "rgba(" + c[0].toString() + ', ' + c[1].toString() + ', ' + c[2].toString() + ', ' + a.toString() + ')'
}


/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {Array}           The HSL representation
 */
function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
