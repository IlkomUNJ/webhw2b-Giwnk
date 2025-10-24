import { HttpContext } from '@adonisjs/core/http'
import { loginValidator, registerValidator } from '#validators/auth'
import User from '#models/user'

export default class AuthController {
  async indexRegist({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async storeRegist({ response, auth, request }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)
    const user = await User.create(payload)

    await auth.use('web').login(user)
    return response.redirect().toRoute('home')
  }

  async indexLogin({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async storeLogin({ request, response, auth, session }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      return response.redirect().toRoute('home')
    } catch (error) {
      session.flash('error', 'Email atau password yang Anda masukkan salah.')
      response.redirect().back()
    }
  }

  async destroyLogin({ response, auth }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('home')
  }
}
