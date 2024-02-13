var fs = require('fs')
var path = require('path')

fs.cpSync('node_modules/@iamproperty/components/assets', 'public/design-system', {recursive: true});
