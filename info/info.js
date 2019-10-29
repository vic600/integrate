const request = require('request')
module.exports = (router) => {
    function appuser(cb) {
        const url = "http://128.199.60.230:8069/web/session/authenticate/";
        const email = 'appuser.mail.com';
        const pass = 'ejenziappuser';
        const db = "ejenzi"
        request(
            {
                method: 'POST',
                url: url,

                json: {
                    "params": {
                        "login": email,
                        "password": pass,
                        "db": db
                    }
                }

            },
            function (error, response, body) {
                if (error) {
                    // cb(error)
                    console.log(error);
                    
                } else {
                    if (response.statusCode != 200) {
                        // res.json({success:false,message: response.statusCode })
                        // cb(response.statusCode)
                        console.log(response.statusCode);
                        
                    } else {
                        if (!body.error) {

                            const cookie = response.headers["set-cookie"][0]                                 //    const cook=cookie.slice(0,50)
                            // try {
                            // res.json({success:true,message:body.result,session:response.headers}).status(200)
                            cb(cookie.substr(11, 40))
                            // } catch (error) {
                            //     res.json({ success: false, message: 'invalid response' })
                            // }
                        } else {
                            // res.json({success:false,message:body.error.data.message})
                            console.log(data.message);

                        }


                    }
                }

            }
        )
    }
    router.post('/products', (req, res) => {
        appuser((tk) => {
            const url = "http://128.199.60.230:8069/api/product.product/?session_id=" + tk;


            request(
                {

                    url: url,


                },
                function (error, response, body) {
                    if (error) {
                        res.json({ success: false, message: error })
                    } else {

                        if (response.statusCode != 200) {
                            res.json({ success: false, message: response.statusCode })
                        } else {
                            if (!body.error) {
                                // try {
                                res.json({ success: true, message: JSON.parse(body) }).status(200)
                                // } catch (error) {
                                //     res.json({ success: false, message: 'invalid response' })
                                // }
                            } else {
                                res.json({ success: false, message: body.error.data.message })
                            }


                        }

                    }

                }
            )
          
        })

    })
    router.post('/categories', (req, res) => {
        appuser((tk) => {
            const url = "http://128.199.60.230:8069/api/product.category/?session_id=" + tk;


            request(
                {

                    url: url,


                },
                function (error, response, body) {
                    if (error) {
                        res.json({ success: false, message: error })
                    } else {

                        if (response.statusCode != 200) {
                            res.json({ success: false, message: response.statusCode })
                        } else {
                            if (!body.error) {
                                // try {
                                res.json({ success: true, message: JSON.parse(body) }).status(200)
                                // } catch (error) {
                                //     res.json({ success: false, message: 'invalid response' })
                                // }
                            } else {
                                res.json({ success: false, message: body.error.data.message })
                            }


                        }

                    }

                }
            )
          
        })

    })
    
    return router
}