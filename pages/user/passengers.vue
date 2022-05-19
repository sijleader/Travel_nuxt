<template>
  <div class="theme-page-section theme-page-section-gray theme-page-section-lg">
    <div class="container">
      <div class="row">
        <div class="col-md-2-5">
          <Sidebar/>
        </div>
        <div class="col-md-9-5">
          <h1 class="theme-account-page-title">مسافران</h1>
          <div class="row row-col-gap" data-gutter="20">
            <div class="col-md-6">
              <div class="theme-account-traveler">
                <i
                  class="theme-account-traveler-icon"
                  >جی</i
                >
                <div class="theme-account-traveler-body">
                  <p class="theme-account-traveler-name">جان دو</p>
                  <ul class="theme-account-traveler-details">
                    <li>john_doe@gmail.com</li>
                    <li>0912345678</li>
                    <li>ایران</li>
                  </ul>
                  <ul class="theme-account-traveler-actions">
                    <li>
                      <a href="#">ویرایش کنید</a>
                    </li>
                    <li>
                      <a href="#">حذف</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="theme-account-traveler">
                <i
                  class="theme-account-traveler-icon"
                  >م</i
                >
                <div class="theme-account-traveler-body">
                  <p class="theme-account-traveler-name">مایا اسمیت</p>
                  <ul class="theme-account-traveler-details">
                    <li>hello_maya95@yahoo.com</li>
                    <li>0912345678</li>
                    <li>ایران</li>
                  </ul>
                  <ul class="theme-account-traveler-actions">
                    <li>
                      <a href="#">ویرایش کنید</a>
                    </li>
                    <li>
                      <a href="#">حذف</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="theme-account-traveler">
                <i
                  class="theme-account-traveler-icon"
                  >تی</i
                >
                <div class="theme-account-traveler-body">
                  <p class="theme-account-traveler-name">تامی جونز</p>
                  <ul class="theme-account-traveler-details">
                    <li>tommy@gmail.com</li>
                    <li>0912345678</li>
                    <li>ایران</li>
                  </ul>
                  <ul class="theme-account-traveler-actions">
                    <li>
                      <a href="#">ویرایش کنید</a>
                    </li>
                    <li>
                      <a href="#">حذف</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="theme-account-traveler">
                <i
                  class="theme-account-traveler-icon"
                  style="background-color: #bf00ff"
                  >L</i
                >
                <div class="theme-account-traveler-body">
                  <p class="theme-account-traveler-name">لوسی دو</p>
                  <ul class="theme-account-traveler-details">
                    <li>lucy_kitty_11@gmail.com</li>
                    <li>0912345678</li>
                    <li>ایران</li>
                  </ul>
                  <ul class="theme-account-traveler-actions">
                    <li>
                      <a href="#">ویرایش کنید</a>
                    </li>
                    <li>
                      <a href="#">حذف</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="theme-account-traveler">
                <i
                  class="theme-account-traveler-icon"
                  >دی</i
                >
                <div class="theme-account-traveler-body">
                  <p class="theme-account-traveler-name">دنی وایت</p>
                  <ul class="theme-account-traveler-details">
                    <li>danny___white@gmail.com</li>
                    <li>0912345678</li>
                    <li>ایران</li>
                  </ul>
                  <ul class="theme-account-traveler-actions">
                    <li>
                      <a href="#">ویرایش کنید</a>
                    </li>
                    <li>
                      <a href="#">حذف</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="theme-account-traveler">
                <a class="theme-account-traveler-link-mask" href="#"></a>
                <p class="theme-account-traveler-add-new">
                  + اضافه کردن مسافر جدید
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/User/Sidebar'

export default {
  components:{
    Sidebar
  },
  layout: 'profile',
}
</script>