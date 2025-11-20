        var currentPath = 5
        var ghostTop = 0
        var ghostImage
        var ghostImage2
        let g1, g2;
        let score = 0;
        let gameRunning = true;

        document.getElementById('overlay2').style.display = 'none'
        function startGame() {
            document.getElementById('overlay1').style.display = 'none'

        var path = [
            { left: 22 }, { left: 35 }, { left: 46 }, { left: 55 }, { left: 67 }, { left: 79 }
        ]
        var path2 = [
            { left: 23 }, { left: 35 }, { left: 45 }, { left: 55 }, { left: 66 }, { left: 78 }
        ]

        var runner = document.getElementById('runner')

        document.body.addEventListener('keydown', function (e) {
            if (!gameRunning) return;
            switch (e.keyCode) {
                case 37: moveLeft(); break;
                case 39: moveRight(); break;
                case 32: shootBullet(); break;
            }
        })

        function moveLeft() {
            if (currentPath == 0) return
            currentPath--
            runner.style.left = path[currentPath].left + "%"
        }
        function moveRight() {
            if (currentPath == 5) return
            currentPath++
            runner.style.left = path[currentPath].left + "%"
        }
        
            let ghostruntime = setInterval(ghostSummoner, 70);

            function ghostSummoner() {
                if (ghostTop == 0) {
                    g1 = ghostrun(rand(6));
                }
                if (ghostTop == 0) {
                    g2 = ghostrun2(rand(6));
                }

                ghostTop++;

                ghostImage.style.top = ghostTop + "%";
                if (ghostTop == 100) {
                    ghostTop = 0;
                    game.removeChild(ghostImage);
                }

                ghostTop++;

                ghostImage2.style.top = ghostTop + "%";
                if (ghostTop == 100) {
                    ghostTop = 0;
                    game.removeChild(ghostImage2);
                }

                if ((g1 == currentPath && (runner.offsetTop - ghostImage.offsetTop < 50 && runner.offsetTop - ghostImage.offsetTop > -50)) ||
                    (g2 == currentPath && (runner.offsetTop - ghostImage2.offsetTop < 50 && runner.offsetTop - ghostImage2.offsetTop > -50))) {
                    gameOver()
                }
            }




            function rand(limit) {
                return Math.floor(Math.random() * limit);
            }
            function ghostrun(num) {
                ghostImage = document.createElement('img')
                ghostImage.src = '/img/dead/zombiee.gif'
                ghostImage.style.height = '200px'
                ghostImage.style.width = '200px'
                ghostImage.style.position = 'absolute'
                ghostImage.style.top = '0'
                ghostImage.style.left = path2[num].left + "%"
                game.append(ghostImage)
                return num
            }
            function ghostrun2(num) {
                ghostImage2 = document.createElement('img')
                ghostImage2.src = '/img/dead/zombiee.gif'
                ghostImage2.style.height = '200px'
                ghostImage2.style.width = '200px'
                ghostImage2.style.position = 'absolute'
                ghostImage2.style.top = '0'
                ghostImage2.style.left = path2[num].left + "%"
                game.append(ghostImage2)
                return num
            }

            function shootBullet() {
                let bullet = document.createElement("img");
                bullet.src = "/img/dead/bullet.png";
                bullet.classList.add("bullet");

                bullet.style.left = (runner.offsetLeft + runner.offsetWidth / 2) + "px";
                bullet.style.top = (runner.offsetTop - 20) + "px";
                game.appendChild(bullet);

                let bulletInterval = setInterval(() => {
                    if (!gameRunning) {
                        bullet.remove();
                        clearInterval(bulletInterval);
                        return;
                    }

                    let bTop = parseInt(bullet.style.top);
                    if (bTop <= 0) {
                        bullet.remove();
                        clearInterval(bulletInterval);
                        return;
                    }
                    bullet.style.top = (bTop - 10) + "px";

                    // check collision with zombies
                    [ghostImage, ghostImage2].forEach((ghost) => {
                        if (ghost && ghost.parentNode) {

                            let gLeft = ghost.offsetLeft;
                            let gTop = ghost.offsetTop;
                            let gRight = gLeft + ghost.offsetWidth;
                            let gBottom = gTop + ghost.offsetHeight;

                            let bLeft = bullet.offsetLeft;
                            let bTop = bullet.offsetTop;
                            let bRight = bLeft + bullet.offsetWidth;
                            let bBottom = bTop + bullet.offsetHeight;

                            if (!(bRight < gLeft ||
                                bLeft > gRight ||
                                bBottom < gTop ||
                                bTop > gBottom)) {
                                ghost.remove();
                                bullet.remove();
                                clearInterval(bulletInterval);
                                score++;
                                document.getElementById("score").innerText = score;
                            }
                        }
                    });
                }, 30);
            }

            function gameOver() {
                gameRunning = false;
                document.getElementById('overlay2').style.display = 'flex';
                clearInterval(ghostruntime);
            }

        }


        function resetGame() {
                document.getElementById('overlay2').style.display = 'none'
                location.reload();
            }
