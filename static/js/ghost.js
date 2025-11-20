        var currentPath = 3
        var ghostTop = 0
        var ghostImage
        var ghostImage2
        let g1, g2;
        document.getElementById('overlay2').style.display = 'none'
        var path = [

            {
                name: 'run-left',
                left: 15
            },
            {
                name: 'run-centre',
                left: 36
            },
            {
                name: 'run-centre',
                left: 46
            },
            {
                name: 'run-right',
                left: 70
            }
        ]
        var path2 = [

            {
                name: 'first-path',
                left: 23
            },
            {
                name: 'second-path',
                left: 45
            },
            {
                name: 'third-path',
                left: 55
            },
            {
                name: 'fourth-path',
                left: 78
            }
        ]

        document.body.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
                case 37: moveLeft(); break;
                case 39: moveRight(); break;
            }

        }
        )

        var runner = document.getElementById('runner')

        function moveLeft() {
            if (currentPath == 0) {
                return
            }
            currentPath--
            runner.style.left = path[currentPath].left + "%"
        }
        function moveRight() {
            if (currentPath == 3) {
                return
            }
            currentPath++
            runner.style.left = path[currentPath].left + "%"

        }

        let ghostruntime = setInterval(ghostSummoner, 50)
        function ghostSummoner() {
            if (ghostTop == 0) {
                g1 = ghostrun(rand(4))
            }
            if (ghostTop == 0) {
                g2 = ghostrun2(rand(4))
            }
            ghostTop++
            ghostImage.style.top = ghostTop + "%"
            if (ghostTop == 100) {
                ghostTop = 0
                game.removeChild(ghostImage)
            }
            ghostTop++
            ghostImage2.style.top = ghostTop + "%"
            if (ghostTop == 100) {
                ghostTop = 0
                game.removeChild(ghostImage2)
            }
            if ((g1 == currentPath || g2 == currentPath) && (ghostTop >= 46)) {
                document.getElementById('overlay2').style.display = 'block'
                clearInterval(ghostruntime)
                return;
            }

        }

        function rand(limit) {
            return Math.floor(Math.random() * limit)
        }
        function ghostrun(num) {
            ghostImage = document.createElement('img')
            ghostImage.src = '/img/ghost/zombie.gif'
            ghostImage.classList.add('image')
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
            ghostImage2.src = '/img/ghost/zombie.gif'
            ghostImage2.style.height = '200px'
            ghostImage2.style.width = '200px'
            ghostImage2.style.position = 'absolute'
            ghostImage2.style.top = '0'
            ghostImage2.style.left = path2[num].left + "%"
            game.append(ghostImage2)
            return num
        }

        function resetGame() {
            document.getElementById('overlay2').style.display = 'none'
        }
