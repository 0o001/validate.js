function Validate (values = {}, rules = {}) {

    if(values.constructor !== Object) {

        throw new 'values is not Object'

    }  else {

        if(Object.entries(values).length === 0 ) {

            throw new 'values object is empty'

        }

    }

    if(rules.constructor !== Object) {

        throw new 'rules is not Object'

    } else {

        if(Object.entries(rules).length === 0 ) {

            throw new 'rules object is empty'

        }

    }
    
    //----If you want rules are strict----
    for(let keyName in values) {

        if(!rules.hasOwnProperty(keyName)) {

            throw new 'value rule is undefined'
    
        }

    }
    //----End strict----


    for(let keyName in values) {

        if(!String(values[keyName]).match(rules[keyName])) {

            return false

        }

    }

    return true
}



Validate.Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
Validate.Password = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
Validate.Phone = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
Validate.Alphabetic = /^[A-Za-z]+$/
Validate.Numeric = /^[0-9]+$/
Validate.Boolean = /^(true|false|0|1)/
Validate.Float = /^[+-]?([0-9]*[.])?[0-9]+/
Validate.Hex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
Validate.Url = /(((ftp|http|https):\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
Validate.JSON = /(?:"(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|([\{\}\[\]]))/
Validate.HTML = /<[a-z][\s\S]*>/  

module.export = Validate