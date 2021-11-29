var log={

info:function(info){
return (`'Info':${info}`)
},
Error:function(error)
{
    console.log(`'Error':${error}`)
}
,
warn:function(warn)
{
    console.log(`'Warn':${warn}`)
}

}

module.exports=log