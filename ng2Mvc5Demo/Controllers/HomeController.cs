﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ng2Mvc5Demo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult List()
        {
            ViewBag.Message = "Your contact page.";

            return PartialView();
        }

        public ActionResult Js()
        {
            ViewBag.Message = "Js";

            return PartialView();
        }

        public ActionResult NavBar()
        {
            ViewBag.Message = "Js";

            return PartialView();
        }
    }
}