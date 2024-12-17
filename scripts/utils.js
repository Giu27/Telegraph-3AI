function load_element(element_path){
    return fetch(element_path).then(response => response.text());
}
