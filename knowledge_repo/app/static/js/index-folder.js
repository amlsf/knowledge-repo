var indexFolderJx = (function(){

  function formatButtons(folderSelected, folderButtons) {
    $(folderSelected)[0].setAttribute("checked", "checked");

    $.each(folderButtons, function(i, button) {
      $("#" + button).click(function() {
        folderSelected = '#' + (this).id;
        $(folderSelected)[0].setAttribute("checked", "checked");
          if (folderSelected !== '') {
            refreshPage(folderSelected);
          }
        });
    });
  }

  function getFolderSelected(folderSelected) {
    if (folderSelected.length === 0) {
        folderSelected = "postsAll";
      }
    return folderSelected;
  }

  function refreshPage(folderSelected) {
    var folder = folderSelected.replace('#', '')
                                   .replace('posts', '')
                                   .toLowerCase();
    var loc = '/feed?folder=' + folder;
    document.location = loc;
  }


  return {
    refreshPage: refreshPage,
    getFolderSelected: getFolderSelected,
    formatButtons: formatButtons
  };
}());
