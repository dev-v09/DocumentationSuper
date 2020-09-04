// Code originally made by @VTEX
var flecha = document.getElementById("siguienteBoton");
flecha.style.display = "none";
// Sets the colchonIdeal options.
var step_size=[
    'fq=specificationFilter_48:Individual', //52
    'fq=specificationFilter_48:Matrimonial',    //47
    'fq=specificationFilter_48:Queen%20Size',   //50
    'fq=specificationFilter_48:King%20Size',    //52
    'fq=specificationFilter_48:California%20King',  //0
];
var step_type=[
    'fq=specificationFilter_19:Lana',   //1
    'fq=specificationFilter_19:Espuma', //16
    'fq=specificationFilter_19:Memory%20Gel',   //9
    'fq=specificationFilter_19:Memory%20Foam',  //13
    'fq=specificationFilter_19:Latex',  //3
    'fq=specificationFilter_19:Resorte',    //40
];
var step_position=[
    'fq=specificationFilter_34:Boca%20arriba',  // 56
    'fq=specificationFilter_34:Boca%20abajo',   //21
    'fq=specificationFilter_34:De%20lado',  // 43
    'fq=specificationFilter_34:Extendido',  //10
];
var step_temp=[
    'fq=specificationFilter_35:Fria',   //6
    'fq=specificationFilter_35:Neutral',    //55
    'fq=specificationFilter_35:Calida', //3
];
var step_pain=[
    'fq=specificationFilter_36:Cuello', // 36
    'fq=specificationFilter_36:Hombros',    // 33
    'fq=specificationFilter_36:Brazos', // 8
    'fq=specificationFilter_36:Espalda',    //42
    'fq=specificationFilter_36:Cadera', //36
];
var step_confort=[
    'fq=specificationFilter_21:Super%20Suave',  //2
    'fq=specificationFilter_21:Suave',  //13
    'fq=specificationFilter_21:Medio',  //34
    'fq=specificationFilter_21:Firme',  //15
    'fq=specificationFilter_21:Extra%20Firme', //NO JALA ESTA
];
// Variables
var slider_size='',
    radio_type=0,
    slider_position='',
    slider_temp='',
    checkbox_pain=[0,null,null,null,null]
    slider_confort='';
var final_step=6;

/* on_slide()
 * This function runs after each of
 * the steps changing the progress
 * bar at the bottom of the screen.
 */
function on_slide(id, step){
    //show img
    $('#step-search-'+step+' .img-step img').hide();
    $('#step-'+step+'-img-'+id).css('display', 'block');
    //Show desc
    $('#step-search-'+step+' .step-desc').hide();
    $('#step-'+step+'-desc-'+id).css('display', 'block');
    if(step=='position'){
        var txt=$('#step-'+step+'-desc-'+id+' h3').html();
        $('.slider-'+step+' .slider-text .txt').html(txt);
    }
}
/* get_url()
 * This function sets the url that
 * wil be used to rediurect the user
 * to its result.
 */
function get_url() {
    var url = '';

    // PASO1
    var id_size = slider_size.slider('value') - 1;
    url += step_size[id_size] + '&';

    // PASO2
    var id_type = (radio_type) ;
    url += step_type[id_type] + '&';

    // PASO3
    var id_position = slider_position.slider('value') - 1;
    url += step_position[id_position] + '&';

    // PASO4
    var id_temp = slider_temp.slider('value') - 1;
    url += step_temp[id_temp] + '&';

    // PASO5
    for (var i = 0, length = checkbox_pain.length; i < length; i++) {
        if (checkbox_pain[i] != null){
            url += step_pain[i] + '&';
        }

    }
    
    // PASO6
    var id_confort = slider_confort.slider('value') - 1;
    url += step_confort[id_confort];

    return url;
}

/* This section is the main code
 * First it sets the click event that will set the redirect url.
 * Depending on the step, Some values will be displayed to the
 * user Step1 - Step6
 */
$(function(){
    $('body').on('click', '.go-to', function(){
        console.log(get_url());
        var that=$(this);
        var step=parseInt($('.step-search-wrapper.active').attr('data-step'));
        if(step==final_step && that.hasClass('next')){
            var url=get_url();
            // console.log(url);
            window.location.href='Sistema?'+url;
        }else{
            step = (that.hasClass('next') ? step+1 : step-1);
            $('.step-search-wrapper').slideUp(function(){ $(this).removeClass('active'); });
            $('.step-search-wrapper[data-step="'+step+'"]').slideDown( function(){
                $(this).addClass('active');
            });
        }

        if(step!=1){
            $('.go-to.prev').addClass('active');
        }else{
            $('.go-to.prev').removeClass('active');
        }
    });
    $('.btn-start').click(function(){
        $('.header-page').slideUp();
        $('.step-search-wrapper[data-step="1"]').slideDown( function(){
            $(this).addClass('active');
        });
        $('.go-to.next').slideDown();

    });
    //STEP1 TAMAÃ‘O DE COLCHON SIZE
    slider_size=$('#slider-size').slider({
        value:1,
        min: 1,
        max: 5,
        step: 1,
        slide: function( event, ui ) {
            var id=ui.value;
            on_slide(id, 'size')
        },
        change: function( event, ui ) {
            var id=ui.value;
            on_slide(id, 'size')
        }
    });
    $('body').on('click', '.slider-size .dot', function(){
        var that=$(this);
        var id=that.attr('data-id');
        slider_size.slider('value', id);
        console.log('Diselo al covenant:');
    });
    //STEP2 MATERIAL DEL COLCHON
    $(".img-tipo").click(function () {
        var mat = document.getElementsByName('material');
        var matval = null;
        for (var i = 0, length = mat.length; i < length; i++) {
            if (mat[i].checked){
                matval = mat[i].value;
            }
        }
        radio_type = matval;
        console.log('Material:' + ' ' + radio_type);
        switch(radio_type) {
            case "0":
                console.log("error no case 0");
                break;
            case "1":
                $(".tipo-desc")[0].innerHTML = "Gestiona la humedad de forma natural es anti alérgico y anti ácaros. No genera electricidad estática, favorece la frecuencia cardiaca tranquila y brinda un descanso reparador.";
                break;
            case "2":
                $(".tipo-desc")[0].innerHTML = "No hace ruido durante el movimiento, son estables y rígidos, especialmente los de alta densidad.";
                break;
            case "3":
                $(".tipo-desc")[0].innerHTML = "Controla la temperatura y rebaja el efecto calor de la viscoelástica, mínima presión corporal y control de temperatura y un alto nivel de confort.";
                break;
            case "4":
                $(".tipo-desc")[0].innerHTML = "Alivio de presión y apoyo mediante la distribución del peso, ayuda a aliviar el cuerpo del estrés y la tensión.";
                break;
            case "5":
                $(".tipo-desc")[0].innerHTML = "Sustancia aspecto lechoso extraído de la corteza de los árboles de caucho, material muy elástico que garantiza la alta adaptabilidad al cuerpo y permite la circulación del aire.";
                break;
            case "6":
                $(".tipo-desc")[0].innerHTML = "Resorte independiente, estable y firme caracterizado por una mejor ventilación.";
                break;
            default:
                console.log("ERROR")
        }
    });
    //STEP3 POSICION PARA DORMIR POSITION
    slider_position=$('#slider-position').slider({
        value:1,
        min: 1,
        max: 4,
        step: 1,
        slide: function( event, ui ) {
            var id=ui.value;
            on_slide(id, 'position')
        },
        change: function( event, ui ) {
            var id=ui.value;
            on_slide(id, 'position')
        }
    });
    $('body').on('click', '.slider-position .dot', function(){
        var that=$(this);
        var id=that.attr('data-id');
        slider_position.slider('value', id);
        // console.log('Posicion:' + '  ' + id);

    });
    //STEP4 Temperature
    slider_temp=$('#slider-temp').slider({
        value:2,
        min: 1,
        max: 3,
        step: 1,
        slide: function( event, ui ) {
            var id=ui.value;
            on_slide(id, 'temp')
        },
        change: function( event, ui ) {
            var id=ui.value;
            on_slide(id, 'temp')
        }
    });
    $('body').on('click', '.slider-temp .dot', function(){
        var that=$(this);
        var id=that.attr('data-id');
        slider_temp.slider('value', id);
        // console.log('Temperatura:' + '  ' + id);

    });
    //STEP5 PUNTO DE DOLOR
    $(".pin-pain").click(function () {
        var pain = document.getElementsByName('dolor');
        var nagato = [];
        for (var i = 0, length = pain.length; i < length; i++) {
            if (pain[i].checked){
                nagato[i] = pain[i].value;
            }else{
                nagato[i] = false
            }
        }
        checkbox_pain = nagato;
        console.log('Nagato Pain:  ' + checkbox_pain);
    });
    //STEP6 CONFORT
    slider_confort=$('#slider-confort').slider({
        value:1,
        min: 1,
        max: 5,
        step: 1,
        slide: function( event, ui ) {
            var id=ui.value;
            on_slide(id, 'confort')
        },
        change: function( event, ui ) {
            var id=ui.value;
            on_slide(id, 'confort')
        }
    });
    $('body').on('click', '.slider-confort .dot', function(){
        var that=$(this);
        var id=that.attr('data-id');
        slider_confort.slider('value', id);
        // console.log('Confort:' + '  ' + id);

    });
});