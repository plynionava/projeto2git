function somamultiplica() {

    var homemV = document.getElementById('nhv')
    var idadehomemV = document.getElementById('ihv').value
    var homemN  = document.getElementById('nhn')
    var idadehomemN = document.getElementById('ihn').value
    var mulherV = document.getElementById('nmv')
    var idademulherV = document.getElementById('imv').value
    var mulherN = document.getElementById('nmn')
    var idademulherN = document.getElementById('imn').value
    var somahvmn  = parseInt(idadehomemV) + parseInt(idademulherN)
    var produtohnmv = idadehomemN*idademulherV
    var res = document.getElementById('res')


    
        res.textContent=`A soma das idades entre ${homemV.value} e ${mulherN.value} é ${somahvmn} e O produto das idades entre ${homemN.value} e ${mulherV.value} é ${produtohnmv}`
        
    
    }