// ===== NOTES DATA =====
// ساختار هر جزوه:
// {
//   id: 'unique-id',
//   title: 'عنوان جزوه (فارسی)',
//   description: 'توضیح کوتاه (فارسی)',
//   category: 'نام دسته‌بندی (انگلیسی)',
//   categoryIcon: 'نام آیکون Lucide',
//   icon: 'نام آیکون Lucide',
//   tag: 'برچسب',
//   date: '2026',
//   content: 'محتوای HTML جزوه (فارسی)'
// }

const NOTES = [
  // ═══════════════════════════════════════════════
  //  جزوه ۱: مفاهیم اولیه سالیدیتی و معماری اتریوم
  // ═══════════════════════════════════════════════
  {
    id: "solidity-basics-01",
    title: "مفاهیم اولیه سالیدیتی و معماری اتریوم",
    description:
      "از صفر مطلق شروع می‌کنیم! اتریوم، بلاکچین، قرارداد هوشمند و اولین کد سالیدیتی — به زبان ساده.",
    category: "Solidity",
    categoryIcon: "file-code-2",
    icon: "cpu",
    tag: "Beginner",
    date: "2026",
    content: `

      <h2>۱. اتریوم چیست؟ 🌍</h2>

      <p>
        فرض کن یک <strong>کامپیوتر غول‌پیکر</strong> وجود داره که توی یک اتاق نیست، بلکه
        بین <strong>هزاران کامپیوتر در سراسر دنیا</strong> پخش شده. هیچ‌کس مالکش نیست،
        هیچ‌کس نمی‌تونه خاموشش کنه، و همه می‌تونن ازش استفاده کنن.
      </p>

      <div class="highlight">
        <strong>💡 مثال ساده:</strong> تصور کن یک ماشین‌حساب داری که فقط مال توئه.
        حالا تصور کن یک ماشین‌حساب وجود داره که <strong>کل دنیا</strong> با هم ازش استفاده می‌کنن
        و هیچ‌کس نمی‌تونه نتیجه‌اش رو عوض کنه. این اتریومه!
      </div>

      <p>
        اتریوم یک <strong>پلتفرم غیرمتمرکز</strong> هست. یعنی:
      </p>
      <ul>
        <li><strong>غیرمتمرکز:</strong> هیچ رئیس، مدیر یا شرکتی کنترلش نمی‌کنه</li>
        <li><strong>شفاف:</strong> همه چیز قابل مشاهده‌ست</li>
        <li><strong>تغییرناپذیر:</strong> وقتی چیزی ثبت شد، دیگه پاک نمیشه</li>
      </ul>

      <blockquote>
        اتریوم مثل یک «کامپیوتر جهانی» هست که برنامه‌هاش هیچ‌وقت از کار نمی‌افتن.
      </blockquote>

      <hr style="border-color: rgba(255,255,255,0.1); margin: 30px 0;" />

      <h2>۲. بلاکچین چیست؟ 📦🔗</h2>

      <p>
        کلمه بلاکچین از دو بخش تشکیل شده:
        <strong>بلاک (Block)</strong> یعنی جعبه، و <strong>چین (Chain)</strong> یعنی زنجیر.
        پس بلاکچین یعنی <strong>زنجیره‌ای از جعبه‌ها</strong>!
      </p>

      <div class="highlight">
        <strong>💡 مثال ساده:</strong> تصور کن یک <strong>دفترچه یادداشت</strong> داری.
        هر صفحه‌اش یک «بلاک» هست. توی هر صفحه می‌نویسی:
        «علی ۱۰ هزار تومن به رضا داد». وقتی صفحه پر شد،
        <strong>مُهر و امضا</strong> می‌زنی و صفحه بعدی رو شروع می‌کنی.
        حالا هیچ‌کس نمی‌تونه صفحات قبلی رو پاک کنه یا عوض کنه،
        چون مُهر هر صفحه به صفحه قبلی وصله!
      </div>

      <h3>ویژگی‌های بلاکچین:</h3>
      <ul>
        <li><strong>🔒 امن:</strong> تغییر اطلاعات تقریباً غیرممکنه</li>
        <li><strong>👁️ شفاف:</strong> همه می‌تونن ببینن چی نوشته شده</li>
        <li><strong>🌐 توزیع‌شده:</strong> کپی دفترچه دست هزاران نفره</li>
        <li><strong>⛓️ زنجیره‌ای:</strong> هر بلاک به بلاک قبلی وصله</li>
      </ul>

      <hr style="border-color: rgba(255,255,255,0.1); margin: 30px 0;" />

      <h2>۳. قرارداد هوشمند چیست؟ 🤖📜</h2>

      <p>
        قرارداد هوشمند (Smart Contract) یک <strong>برنامه کامپیوتری</strong> هست
        که روی بلاکچین اتریوم زندگی می‌کنه و <strong>خودکار</strong> کار می‌کنه.
      </p>

      <div class="highlight">
        <strong>💡 مثال ساده:</strong> تصور کن یک <strong>دستگاه فروش خودکار نوشابه</strong> داری.
        تو ۱۰ هزار تومن میندازی توش، دستگاه <strong>خودکار</strong> نوشابه میده.
        نه فروشنده‌ای هست، نه واسطه‌ای. دستگاه طبق <strong>قانونی که براش نوشتن</strong> کار می‌کنه:
        <br/><br/>
        <code>اگر پول >= ۱۰۰۰۰ تومان → نوشابه بده</code>
        <br/><br/>
        قرارداد هوشمند دقیقاً همینه! یک برنامه که وقتی شرایطش برقرار شد،
        <strong>خودکار اجرا میشه</strong> و هیچ‌کس نمی‌تونه جلوش رو بگیره.
      </div>

      <h3>چرا «هوشمند»؟</h3>
      <ul>
        <li>چون <strong>خودکار</strong> هست و نیاز به انسان نداره</li>
        <li>چون <strong>قابل اعتماد</strong> هست و کسی نمی‌تونه تقلب کنه</li>
        <li>چون <strong>همیشه در دسترس</strong> هست (۲۴ ساعته، ۷ روز هفته)</li>
      </ul>

      <blockquote>
        قرارداد هوشمند = یک قول دیجیتالی که هیچ‌کس نمی‌تونه زیرش بزنه!
      </blockquote>

      <hr style="border-color: rgba(255,255,255,0.1); margin: 30px 0;" />

      <h2>۴. سالیدیتی چیست؟ 💻</h2>

      <p>
        حالا که فهمیدیم قرارداد هوشمند چیه، سوال اینه:
        <strong>با چه زبانی قرارداد هوشمند بنویسیم؟</strong>
      </p>
      <p>
        جواب: <strong>سالیدیتی (Solidity)</strong>!
      </p>
      <p>
        سالیدیتی یک <strong>زبان برنامه‌نویسی</strong> هست که مخصوص نوشتن
        قراردادهای هوشمند روی اتریوم ساخته شده.
      </p>

      <div class="highlight">
        <strong>💡 مثال ساده:</strong> همون‌طور که با <strong>فارسی</strong> با ایرانی‌ها حرف می‌زنی
        و با <strong>انگلیسی</strong> با آمریکایی‌ها، با <strong>سالیدیتی</strong> هم
        با اتریوم حرف می‌زنی و بهش می‌گی چه کاری انجام بده!
      </div>

      <h3>ویژگی‌های سالیدیتی:</h3>
      <ul>
        <li>شبیه زبان‌های JavaScript و C++ هست (یادگیریش آسونه!)</li>
        <li>مخصوص قراردادهای هوشمند طراحی شده</li>
        <li>کدهاش روی <strong>EVM</strong> اجرا میشن (بعداً توضیح میدیم)</li>
        <li>فایل‌هاش پسوند <code>.sol</code> دارن</li>
      </ul>

      <hr style="border-color: rgba(255,255,255,0.1); margin: 30px 0;" />

      <h2>۵. معماری اتریوم 🏗️</h2>

      <p>
        اتریوم از چند بخش مهم تشکیل شده. بیا هر کدوم رو ساده یاد بگیریم:
      </p>

      <h3>الف) EVM — ماشین مجازی اتریوم 🧠</h3>
      <p>
        EVM مخفف <strong>Ethereum Virtual Machine</strong> هست.
        این همون «مغز» اتریومه که کدهای سالیدیتی رو می‌خونه و اجرا می‌کنه.
      </p>
      <div class="highlight">
        <strong>💡 مثال:</strong> EVM مثل یک <strong>آشپز</strong> هست.
        تو دستور پخت (کد سالیدیتی) رو بهش میدی،
        اون هم غذا (نتیجه) رو آماده می‌کنه.
        فرقی نمی‌کنه آشپز توی کدوم کشور باشه،
        غذا همیشه یکجور درمیاد!
      </div>

      <h3>ب) حساب‌ها (Accounts) 👤🏦</h3>
      <p>
        توی اتریوم دو نوع حساب داریم:
      </p>
      <ul>
        <li>
          <strong>حساب شخصی (EOA):</strong> مثل حساب بانکی تو.
          یک آدرس داری و می‌تونی اتر (پول اتریوم) بفرستی و بگیری.
          با <strong>کلید خصوصی</strong> (رمز عبور) کنترل میشه.
        </li>
        <li>
          <strong>حساب قرارداد (Contract Account):</strong>
          این حساب مال یک قرارداد هوشمنده.
          خودش کلید خصوصی نداره و فقط با <strong>کدش</strong> کنترل میشه.
        </li>
      </ul>

      <div class="highlight">
        <strong>💡 مثال:</strong> حساب شخصی مثل <strong>کیف پول تو</strong> هست
        که خودت رمزت رو داری. حساب قرارداد مثل <strong>صندوق امانات بانک</strong> هست
        که فقط با قوانین خاصی باز میشه.
      </div>

      <h3>ج) گَس (Gas) ⛽</h3>
      <p>
        هر کاری که روی اتریوم انجام بدی (فرستادن پول، اجرای قرارداد و...)
        نیاز به <strong>گَس</strong> داره. گَس مثل <strong>بنزین</strong> هست!
      </p>
      <div class="highlight">
        <strong>💡 مثال:</strong> وقتی با ماشین میری مسافرت، بنزین مصرف می‌کنی.
        هرچی مسیر طولانی‌تر باشه، بنزین بیشتری لازمه.
        توی اتریوم هم هرچی کارت پیچیده‌تر باشه، گَس بیشتری لازمه
        و باید <strong>هزینه بیشتری</strong> (به اتر) پرداخت کنی.
      </div>

      <h3>د) اتر (Ether / ETH) 💰</h3>
      <p>
        اتر <strong>پول رسمی</strong> شبکه اتریومه.
        هم برای پرداخت گَس استفاده میشه، هم مثل هر ارز دیگه‌ای
        می‌تونی بخری و بفروشی.
      </p>

      <hr style="border-color: rgba(255,255,255,0.1); margin: 30px 0;" />

      <h2>۶. اولین کد سالیدیتی! 🎉</h2>

      <p>
        حالا وقتشه اولین کدمون رو بنویسیم! نترس، خیلی ساده‌ست:
      </p>

      <pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Salam Donya!";

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}</code></pre>

      <h3>خط به خط توضیح میدیم:</h3>

      <ul>
        <li>
          <code>pragma solidity ^0.8.0;</code>
          <br/>
          یعنی: «این کد با نسخه ۰.۸ به بالای سالیدیتی کار می‌کنه.»
          مثل اینه که بگی «این کتاب برای بچه‌های کلاس سوم به بالاست.»
        </li>
        <li>
          <code>contract HelloWorld { ... }</code>
          <br/>
          یعنی: «یک قرارداد هوشمند به اسم HelloWorld بساز.»
          مثل اینه که بگی «یک جعبه جدید بساز و اسمش رو بذار HelloWorld.»
        </li>
        <li>
          <code>string public message = "Salam Donya!";</code>
          <br/>
          یعنی: «یک متغیر (ظرف) به اسم message بساز و توش بنویس Salam Donya!»
          مثل اینه که روی یک کاغذ بنویسی «سلام دنیا» و بذاریش توی کشو.
        </li>
        <li>
          <code>function getMessage()</code>
          <br/>
          یک <strong>تابع</strong> هست که پیام رو <strong>می‌خونه</strong> و برمی‌گردونه.
          مثل اینه که در کشو رو باز کنی و کاغذ رو بخونی.
        </li>
        <li>
          <code>function setMessage()</code>
          <br/>
          یک <strong>تابع</strong> هست که پیام رو <strong>عوض می‌کنه</strong>.
          مثل اینه که کاغذ قدیمی رو برداری و یک کاغذ جدید بذاری.
        </li>
      </ul>

      <hr style="border-color: rgba(255,255,255,0.1); margin: 30px 0;" />

      <h2>۷. انواع داده‌ها در سالیدیتی 📊</h2>

      <p>
        توی سالیدیتی، هر اطلاعاتی یک <strong>نوع (Type)</strong> داره.
        مثل اینه که بگی «عدد» با «کلمه» فرق داره:
      </p>

      <ul>
        <li>
          <code>uint</code> — عدد صحیح مثبت (مثل ۱، ۲، ۱۰۰)
          <br/>مثال: <code>uint age = 10;</code>
        </li>
        <li>
          <code>int</code> — عدد صحیح مثبت و منفی (مثل -۵، ۰، ۱۰)
          <br/>مثال: <code>int temperature = -3;</code>
        </li>
        <li>
          <code>bool</code> — درست یا غلط (فقط true یا false)
          <br/>مثال: <code>bool isStudent = true;</code>
        </li>
        <li>
          <code>string</code> — متن (رشته‌ای از حروف)
          <br/>مثال: <code>string name = "Ali";</code>
        </li>
        <li>
          <code>address</code> — آدرس اتریوم (مثل شماره حساب بانکی)
          <br/>مثال: <code>address myWallet = 0x1234...abcd;</code>
        </li>
      </ul>

      <div class="highlight">
        <strong>💡 مثال ساده:</strong> تصور کن یک <strong>فرم مدرسه</strong> پر می‌کنی:
        <br/>نام → <code>string</code>
        <br/>سن → <code>uint</code>
        <br/>آیا دانش‌آموز هستی؟ → <code>bool</code>
        <br/>آدرس کیف پول → <code>address</code>
      </div>

      <hr style="border-color: rgba(255,255,255,0.1); margin: 30px 0;" />

      <h2>۸. توابع (Functions) در سالیدیتی ⚙️</h2>

      <p>
        تابع یعنی یک <strong>دستور</strong> که یک کار خاص انجام میده.
        مثل یک <strong>دستور آشپزی</strong>: مواد اولیه رو میدی، غذا تحویل می‌گیری!
      </p>

      <pre><code>function add(uint a, uint b) public pure returns (uint) {
    return a + b;
}</code></pre>

      <h3>توضیح:</h3>
      <ul>
        <li><code>add</code> → اسم تابع (جمع کردن)</li>
        <li><code>uint a, uint b</code> → دو عدد ورودی می‌گیره</li>
        <li><code>public</code> → هر کسی می‌تونه صداش بزنه</li>
        <li><code>pure</code> → هیچ چیزی رو روی بلاکچین تغییر نمیده</li>
        <li><code>returns (uint)</code> → یک عدد برمی‌گردونه</li>
        <li><code>return a + b;</code> → حاصل جمع رو میده</li>
      </ul>

      <div class="highlight">
        <strong>💡 مثال ساده:</strong>
        تابع <code>add</code> مثل یک <strong>ماشین‌حساب</strong> هست.
        دو عدد بهش میدی (مثلاً ۳ و ۵)،
        اون هم جواب (۸) رو بهت میده!
      </div>

      <h3>انواع توابع از نظر دسترسی:</h3>
      <ul>
        <li><code>public</code> → همه می‌تونن استفاده کنن (درب بازه!)</li>
        <li><code>private</code> → فقط خود قرارداد (درب قفله!)</li>
        <li><code>internal</code> → خود قرارداد و فرزنداش</li>
        <li><code>external</code> → فقط از بیرون قرارداد</li>
      </ul>

      <hr style="border-color: rgba(255,255,255,0.1); margin: 30px 0;" />

      <h2>۹. جمع‌بندی نهایی 🎯</h2>

      <p>بیا مرور کنیم چی یاد گرفتیم:</p>

      <ul>
        <li><strong>اتریوم</strong> = کامپیوتر جهانی غیرمتمرکز</li>
        <li><strong>بلاکچین</strong> = دفترچه یادداشت تغییرناپذیر</li>
        <li><strong>قرارداد هوشمند</strong> = برنامه خودکار روی بلاکچین</li>
        <li><strong>سالیدیتی</strong> = زبان نوشتن قراردادهای هوشمند</li>
        <li><strong>EVM</strong> = مغز اتریوم که کدها رو اجرا می‌کنه</li>
        <li><strong>Gas</strong> = بنزین اتریوم (هزینه اجرا)</li>
        <li><strong>ETH</strong> = پول رسمی اتریوم</li>
        <li><strong>انواع داده</strong> = uint, int, bool, string, address</li>
        <li><strong>توابع</strong> = دستوراتی که کار خاصی انجام میدن</li>
      </ul>

      <blockquote>
        تبریک! تو الان مفاهیم پایه اتریوم و سالیدیتی رو بلدی.
        قدم بعدی: نوشتن قراردادهای هوشمند واقعی! 🚀
      </blockquote>

    `,
  },
];
