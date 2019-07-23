const Mail = require('../services/Mail')


class PurchaseMail {
  get Key(){
    return 'PurchaseMail'
  }

  async handle(job, done){
    const {ad, user, content} = job.data
    await Mail.sendMail({
      from: '"Carlos Baraúna"<carloss.barauna@gmail.com>',
      to: ad.author.email,
      subject: `Solicitação de Compra: ${ad.title}`,
      html: 'purchase',
      context:{user, content, ad}
    })
    return done()
  }
}

module.exports = new PurchaseMail()
