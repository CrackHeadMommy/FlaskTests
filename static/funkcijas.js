function nospiestaPoga(){
    let vards = document.getElementById('vards').value
    let uzvards = document.getElementById('uzvards').value
    fetch('/sveiki',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"cilvekaVards":vards, "cilvekaUzvards":uzvards})
    })
    console.log(vards, uzvards)
}