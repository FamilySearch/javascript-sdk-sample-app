/**
 * This file contains functions that help with common tasks such as creating
 * a loading indicator and print data.
 */
 
function getLoadingIndicator() {
  var $loading = $('<div>').addClass('loading text-center');
  $('<p>').addClass('lead').text('Loading...').appendTo($loading);
  $('<img>').attr('src', '/assets/loader.gif').appendTo($loading);
  return $loading;
}