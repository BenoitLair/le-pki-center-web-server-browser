var app = express();
var dir =  process.cwd();
app.use(express.static(dir)); //current working directory
app.use(express.static(__dirname)); //module directory
var server = http.createServer(app);
