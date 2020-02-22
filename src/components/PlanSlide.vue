<template>
  <section>
    <h2>План</h2>
    <div class="plan__container">
      <div class="plan__qr-code">
        <img class="plan__img" src="@/assets/qr-code.png">
      </div>
      <div class="plan__plan">
        <ul>
          <li>Говорим до 15:15</li>
          <li>Перерыв 10 минут</li>
          <li>Говорим до 16:30</li>
        </ul>
        <p class="plan__waiting fragment">Ждём вопросов :-)</p>
      </div>
    </div>
  </section>
</template>

<style>
.plan__container {
  display: flex;
}
.plan__qr-code,
.plan__plan {
  flex: 1;
}
.plan__img {
  height: 40vh;
}
.plan__weight {
  font-weight: bold;
}
</style>
