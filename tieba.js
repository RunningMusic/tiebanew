imodule.exports = class Tieba {
  constructor(cookies) {
    this.request = require('request').defaults({
      headers: {
        cookie: cookies
      }
    })
  }

  comment(tid, index, content) {
    let data = {
      ie: 'utf-8',
      tid: tid,
      floor_num: index,
      rich_text: 1,
      content: content,
      lp_type: 0,
      lp_sub_type: 0,
      new_vcode: 1,
      tag: 11,
      anonymous: 0
    }

    return new Promise((resolve) => {
      this.request.get('http://tieba.baidu.com/p/' + tid, (error, response) => {
        if (!error) {
          data['fid'] = response.body.match(/fid=(\d+)/)[1]
          data['tbs'] = response.body.match(/"tbs": "(.*?)"/)[1]
          data['kw'] = response.body.match(/fname="(.*?)"/)[1]
          data['repostid'] = response.body.match(new RegExp(`post_id&quot;:(.*?),.*post_no&quot;:${index}`))[1]
          data['quote_id'] = data['repostid']

          this.request.post(
            'http://tieba.baidu.com/f/commit/post/add',
            (error, response) => resolve(response.body)).form(data)
        }
      })
    })
  }
}
