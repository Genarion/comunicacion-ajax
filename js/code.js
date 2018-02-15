{
  $inputNode = $('#searcher');
  $tableNode = $('.table-content');

  const API = 'https://putsreq.com/D9dXIKH2P0tMtCqDWxVl';

  let getAlumnos = function(param){
    let $request = $.ajax({
      url:  param ? API + '?name=' + param : API,
      cache: false,
      method: 'GET',
      dataType: 'json',
    })
    .fail(function( data ){
      $tableNode.html('<div class="alert"><p>Error, la petición ha fallado</p></div>');
    })
    .done(function( data ) {
      $tableNode.empty();

      if( $request.status === 204 || data.alumnos.length === 0){
        $tableNode.html('<div class="alert"><p>No hay coincidencias</p></div>');
      }else{
        $.each( data.alumnos, function( i, item ) {
          $tableNode.append( '<div class="row"> <p>' + item.nombre + '</p><p>' + item.apellidos + '</p></div>');
        });
        $('body > div > div.table-content > div > p').on('click', function(){ $inputNode.val( $( this ).closest('.row').children('p:nth-child(1)').html() ).trigger('change') });
      }

    });
  };

  $inputNode.on('keyup change',function() {
    getAlumnos( $( this ).val() );
  });

  getAlumnos();
}
