//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton(){
    console.log($('#navbarPlaceholder').load('./xml/nav.xml'));
    console.log($('#footerPlaceholder').load('./xml/footer.xml'));
}
loadSkeleton();  //invoke the function
