var vm = require('vm');
var path = require('path');


// TODO(vojta): improve, this is lame
var parseProvideRequire = function(str) {
  var provides = [];
  var requires = [];
  var match;

  str.split('\n').forEach(function(line) {
    match = line.match(/goog\.provide\([\"\'](.*)[\"\']\)/);
    if (match) {
      provides.push(match[1]);
    }

    match = line.match(/goog\.require\([\"\'](.*)[\"\']\)/);
    if (match) {
      requires.push(match[1]);
    }
  });

  return {
    provides: provides.sort(),
    requires: requires.sort()
  };
};

var parseDepsJs = function(filepath, content) {
  var parsed = {
    fileMap: Object.create(null),
    provideMap: Object.create(null)
  };
  var sandbox = {
    parsed: parsed,
    goog: {
      addDependency: function(relativePath, provides, requires) {
        var absolutePath = path.resolve(path.dirname(filepath), relativePath);

        parsed.fileMap[absolutePath] = {provides: provides, requires: requires};
        provides.forEach(function(dep) {
          parsed.provideMap[dep] = absolutePath;
        });
      }
    }
  };

  vm.runInNewContext(content, sandbox, filepath);

  return parsed;
};

exports.parseDepsJs = parseDepsJs;
exports.parseProvideRequire = parseProvideRequire;