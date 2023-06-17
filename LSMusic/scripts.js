function send(e,form) {
    fetch(form.action, {method:'post', body: new FormData(form)});
  
    console.log('We send post asynchronously (AJAX)');
    e.preventDefault();
  }