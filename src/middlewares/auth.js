const adminAuth = (_req, res, next) => {
    const token = 'xyz';
    const isAdminAuthorised = token === 'xyz';
    if (!isAdminAuthorised) {
        res.status(404).send("❌❌Unauthorized user❌❌")
    } else {
        next();
    }
}

const userAuth = (_req, res, next) => {
    console.log('User Auth checked')
    const token = 'abc';
    const isUserAuthorised = token === 'abc';
    if (!isUserAuthorised) {
        res.status(404).send("❌❌Unauthorized user❌❌")
    } else {
        next();
    }
}

export { adminAuth, userAuth }


