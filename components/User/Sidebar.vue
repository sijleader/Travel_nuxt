<template>
  <div class="theme-account-sidebar">
    <div class="theme-account-avatar">
      <img
        class="theme-account-avatar-img"
        src="~/static/img/amaze_70x70.jpg"
        alt="تصویر متن جایگزین"
        title="عنوان تصویر"
      />
      <p class="theme-account-avatar-name">
        خوش اومدی <br />
        جان دو
      </p>
    </div>
    <nav class="theme-account-nav">
      <ul class="theme-account-nav-list">
        <li class='' active-class="active">
          <nuxt-link to="/user/account">
            <i class="fa fa-cog"></i>حساب کاربری
          </nuxt-link>
        </li>

        <li class='' active-class="active">
          <nuxt-link to="/user/passengers">
            <i class="fa fa-user-circle-o"></i>مسافران
          </nuxt-link>
        </li>
        <li class='' active-class="active">
          <nuxt-link to="/user/orders">
            <i class="fa fa-history"></i>تاریخچه سفرها
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
