// Middleware to control access based on auth state

module.exports = {

  // Protect routes — only for logged-in users
  ensureAuth(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/')
  },

  // Prevent logged-in users from accessing public pages (like login , /dashboard)
  ensureGuest(req, res, next) {
    if (req.isAuthenticated()) return res.redirect('/dashboard')
    next()
  }

}