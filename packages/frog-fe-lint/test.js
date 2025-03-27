const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

// 读取 package.json
// const pkg = JSON.parse(
//   fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf8'),
// );

// 精确移除依赖
const packageNamesToRemove = [
  '@babel/eslint-parser',
  '@commitlint/cli',
  '@iceworks/spec',
  'babel-eslint',
  'eslint',
  'husky',
  'markdownlint',
  'prettier',
  'stylelint',
  'tslint',
];

// 按前缀移除依赖
const packagePrefixesToRemove = [
  '@commitlint/',
  '@typescript-eslint/',
  'eslint-',
  'stylelint-',
  'markdownlint-',
  'commitlint-',
];

const pkgPath = path.resolve(process.cwd(), 'package.json');
const pkg = fs.readJSONSync(pkgPath);
const dependencies = [].concat(
  Object.keys(pkg.dependencies || {}),
  Object.keys(pkg.devDependencies || []),
);
const willRemovePackage = dependencies.filter(
  (name) => 
    packageNamesToRemove.includes(name) ||
    packagePrefixesToRemove.some((prefix) => name.startsWith(prefix)),
);
const checkUselessConfig = (cwd) => {
  return []
    .concat(glob.sync('.eslintrc?(.@(yaml|yml|json))', { cwd }))
    .concat(glob.sync('.stylelintrc?(.@(yaml|yml|json))', { cwd }))
    .concat(glob.sync('.markdownlint@(rc|.@(yaml|yml|json))', { cwd }))
    .concat(
      glob.sync('.prettierrc?(.@(cjs|config.js|config.cjs|yaml|yml|json|json5|toml))', { cwd }),
    )
    .concat(glob.sync('tslint.@(yaml|yml|json)', { cwd }))
    .concat(glob.sync('.kylerc?(.@(yaml|yml|json))', { cwd }));
};
const checkReWriteConfig = (cwd) => {
  return glob
    .sync('**/*.ejs', { cwd: path.resolve(__dirname, './src/config') })
    .map((name) => name.replace(/^_/, '.').replace(/\.ejs$/, ''))
    .filter((filename) => fs.existsSync(path.resolve(cwd, filename)));
};
const uselessConfig = checkUselessConfig(process.cwd());
const reWriteConfig = checkReWriteConfig(process.cwd());

console.log('dependencies', dependencies);
console.log('willRemovePackage', willRemovePackage);
console.log('uselessConfig', uselessConfig);
console.log('reWriteConfig', reWriteConfig);
console.log(fs.existsSync(path.resolve(process.cwd(), '.eslintrc.json')));
console.log(glob.sync('**/*.ejs', { cwd: path.resolve(__dirname, './src/config') }).map((name) => name.replace(/^_/, '.').replace(/\.ejs$/, '')));