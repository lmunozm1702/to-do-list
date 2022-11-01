! /usr/bin/sh

npm init -y
npm install webpack webpack-cli --save-dev

mkdir src
cp ~/shell/index.js src
mkdir dist
cp ~/shell/index.html dist
npm install --save lodash
npx webpack --mode=development

cp ~/shell/webpack.config.js .
npx webpack --config webpack.config.js --mode=development

echo "replace into package.json  'main': 'index.js', => 'private':true,"
echo
echo "Replace:"
echo "'test': 'echo \"Error: no test specified\" && exit 1',"
echo "'build': 'webpack'"
echo 
echo "Add into webpack.config.js"
echo "mode: 'development',"

echo "configure html template"
echo "https://github.com/microverseinc/curriculum-javascript/blob/main/todo-list/exercises/exercise_set_up_project_with_webpack.md"

npm run build

npm install --save-dev html-webpack-plugin
echo "do changes: https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin"

npm install --save-dev style-loader css-loader
echo "made changes https://webpack.js.org/guides/asset-management/#loading-css"

npm install --save-dev webpack-dev-server
echo "config as: https://webpack.js.org/guides/development/#using-webpack-dev-server"

npm run build
npm start
echo "If error, do: https://github.com/webpack/webpack/discussions/15762"

npm config delete "@fortawesome:registry"
npm install --save @fortawesome/fontawesome-free

echo "import '@fortawesome/fontawesome-free/js/fontawesome'"
echo "import '@fortawesome/fontawesome-free/js/solid'"
echo "import '@fortawesome/fontawesome-free/js/regular'"
echo "import '@fortawesome/fontawesome-free/js/brands'"