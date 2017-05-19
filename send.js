var Tieba = require('./tieba')

var data = [
  {
    cookies: 'TIEBA_USERTYPE=b9c40c85437a9abc86542943; BAIDUID=E103968782A4D46451AAE46A8964F478:FG=1; BDUSS=BhZzg5WEZzMFNpSzV-VWpwYVJ6RVlyYVgwU091NXFCdjVYQ1l0Sk1aTFE0NUpYQVFBQUFBJCQAAAAAAAAAAAEAAAABSZIpsbG-qcGit70AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANBWa1fQVmtXQj; TIEBAUID=69b534f81121deee0c852a84; LONGID=697452801',
    name: '跑步',
    tid: 4627440942,
    index: 3,
    content: '[emotion pic_type=1 width=30 height=30]http://tb2.bdstatic.com/tb/editor/images/face/i_f01.png?t=20140803[/emotion]'
  },
  {
    cookies: 'TIEBA_USERTYPE=68763e205ef97f440a0d5640; BAIDUID=F47A7404455F9BD9E3C9F3166B6FC5DA:FG=1; BDUSS=VFyVktiM3lhN0RrOWlPT2FlbXNJdUY2UnA5Y0g4ZHd5djJSWUpmMW1HRFc1SkpYQVFBQUFBJCQAAAAAAAAAAAEAAABCmjJIwM7Azs~U0sYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANZXa1fWV2tXe; TIEBAUID=c57bab2c6a91b57603f2cb14',
    name: '跑步',
    tid: 4627440942,
    index: 3,
    content: '[emotion pic_type=1 width=30 height=30]http://tb2.bdstatic.com/tb/editor/images/face/i_f01.png?t=20140803[/emotion]'
  }
]

data.forEach((item, i) => {
  setTimeout(() => {
    var tieba = new Tieba(item.cookies)

    setInterval(function () {
      tieba
        .comment(item.tid, item.index, item.content)
        .then((response) => console.log(response))
    }, 60000)
  }, i * 30000)
})
