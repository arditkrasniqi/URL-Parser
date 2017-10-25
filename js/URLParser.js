/*
    URL Parser
    Ardit Krasniqi
    http://github.com/arditkrasniqi
    10/25/2017
*/
var URL = {
    path:document.location.href, // the current url to parse
    get:function(key){ // this returns the value of the given key (example: '?name=myname') URL.get('name') returns "myname"
        var val = this.path.substr(this.path.indexOf(key) + key.length + 1); // substring path by the given key
        if(!this.path.includes(key)){ // checks if given argument exists on url
            throw new Error("Key \"" + key + "\" not found on URL"); // if not, throw Error
        }
        // if path includes '&', substring path from 0 to character '&'
        if(val.includes('&')){
            val = val.substring(0,val.indexOf('&'));
        }
        return val;
    }
}