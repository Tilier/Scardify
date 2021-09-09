/* NOTE: this script is not deployed through this repository. the image processing is handled by a replit i created,
but that replit has some other code too, so i put the important stuff here. */

app.get('/website', async (req, res) => {

Canvas.registerFont('./fonts/Circular Bold.otf', { family: 'Circular Bold' })

Canvas.registerFont('./fonts/Circular Regular.otf', { family: 'Circular Regular' })
    

    const canvas = Canvas.createCanvas(414, 896);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/863628992082608142/884903761997365338/song.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

ctx.font = '23px Circular Bold';
ctx.fillStyle = '#ffffff';
ctx.fillText(`${req.query.name}`, 26, 605);

ctx.font = '13px Circular Regular';
ctx.fillStyle = '#BBBBBA';
ctx.fillText(`${req.query.artist}`, 26, 630);

Canvas.loadImage(`${req.query.cover}`)
.then((image) => {
  ctx.drawImage(image, 24, 157, 365, 365)
  const buffer = canvas.toBuffer("image/png");
  let string = randomString(20, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
  fs.writeFileSync(`./images/${string}.png`, buffer);
  res.sendFile(path.join(__dirname, './images', `${string}.png`));
  
});
