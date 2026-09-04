import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'analisis-sentimen-whoosh-indobert-svm',
    title: 'Whoosh Sentiment & Debt Analysis',
    tag: 'Python',
    summary:
      'Analisis sentimen publik multi-platform (X, YouTube, TikTok) terhadap isu beban utang Kereta Cepat Whoosh mengombinasikan IndoBERT-SVM dan CRISP-DM.',
    description:
      'Pengembangan sistem analisis sentimen publik multi-platform berbasis metode hibrida IndoBERT (CLS Embedding 768-dimensi) dan Support Vector Machine (SVM) Polynomial Kernel untuk memetakan persepsi publik terhadap beban utang proyek Kereta Cepat Whoosh.',
    stack: ['Python', 'IndoBERT', 'SVM', 'PyTorch', 'Pandas', 'Scikit-Learn'],
    visualizations: [
      {
        title: 'Platform Volume Distribution',
        caption:
          'Distribusi korpus bersih 6.766 data: YouTube 64.2% (4.342), TikTok 18.6% (1.260), dan X 17.2% (1.164)',
        icon: 'bar-chart',
        image: '/images/projects/gambar-4-1.jpg',
      },
      {
        title: 'Public Sentiment Ratio',
        caption:
          'Hasil Pseudo-Labeling IndoBERT: Negatif 70.0% (4.736), Netral 17.5% (1.182), dan Positif 12.5% (848)',
        icon: 'activity',
        image: '/images/projects/gambar-4-9.jpg',
      },
      {
        title: 'WordCloud Topic Exploration',
        caption:
          'Eksplorasi kata kunci dominan per kelas sentimen: apresiasi figur/kemanfaatan vs kecemasan beban fiskal',
        icon: 'activity',
        image: '/images/projects/gambar-4-2.jpg',
      },
      {
        title: 'Top-20 Word Frequency Analysis',
        caption:
          'Ekstraksi frekuensi kata teratas: dominasi kata "bayar" (738), "jokowi" (620), "omon" (440), dan "china" (102)',
        icon: 'bar-chart',
        image: '/images/projects/gambar-4-5.jpg',
      },
      {
        title: 'Confusion Matrix & 5-Fold CV',
        caption:
          'Evaluasi SVM Poly (Split 90:10): Test Accuracy 87.44% & konsistensi 5-Fold CV 86.83% ± 0.79%',
        icon: 'map',
        image: '/images/projects/gambar-4-13.jpg',
      },
    ],
    challenge: {
      description:
        'Tingginya kecemasan fiskal publik terkait utang Kereta Cepat Whoosh yang diiringi tingginya noise bahasa slang/non-formal di media sosial, serta ketimpangan kelas sentimen negatif yang ekstrem.',
      points: [
        'Data mentah 7.193 baris mengandung duplikat, slang, serta noise linguistik lintas 3 platform media sosial',
        'Pendekatan InSet Lexicon awal menghasilkan kecenderungan bias context-free yang ekstrem (Negatif 76.5%)',
        'Ketimpangan kelas alami (Negatif 70.0%, Netral 17.5%, Positif 12.5%) yang berpotensi memicu timbulnya overfit',
      ],
    },
    impact: [
      { label: 'Model Test Accuracy (SVM Poly)', value: '87.44%' },
      { label: '5-Fold Cross Validation Mean', value: '86.83%' },
      { label: 'Generalization Gap (Train vs CV)', value: '4.55%' },
      { label: 'Clean Social Datasets Analyzed', value: '6,766 Rows' },
    ],
    solution: [
      {
        step: '01',
        title: 'Multi-Platform Scraping & Cleansing',
        description:
          'Pengumpulkan data mentah dari X, YouTube, dan TikTok, filtering 363 duplikat, serta normalisasi 4.347 kata slang ke kamus baku.',
      },
      {
        step: '02',
        title: 'Pseudo-Labeling & Feature Extraction',
        description:
          'Pelabelan kontekstual menggunakan IndoBERT SMSA dan ekstraksi fitur CLS Embeddings berdimensi 768 dari model indobert-base-p1.',
      },
      {
        step: '03',
        title: 'SVM Polynomial Classification',
        description:
          'Pemodelan SVM Kernel Polynomial (Split 90:10) yang terbukti superior dan bebas overfitting dibanding teknik resampling (SMOTE/Undersampling).',
      },
    ],
    insights: {
      paragraphs: [
        'Diskursus publik didominasi oleh sentimen Negatif (70.0%) dengan 3 klaster isu utama: Kecemasan Fiskal (kata kunci: "bayar" [698], "utang" [535]), Akuntabilitas Tata Kelola ("korupsi" [332]), dan Dependensi Geopolitik ("china" [99]).',
        'Integrasi vektor [CLS] IndoBERT dan Kernel Polynomial SVM terbukti mampu menarik garis batas keputusan (hyperplane) optimal langsung pada distribusi data asli tanpa manipulasi data sintetis, serta meraih status "Generalisasi Baik" dengan gap kelayakan 4.55%.',
      ],
      codeFileName: 'eval_indobert_svm.py',
      rows: [
        {
          actual: 'NEGATIF',
          forecast: '4,736 (70.0%)',
          error: 'F1: 0.9269',
          bar: '',
        },
        {
          actual: 'NETRAL',
          forecast: '1,182 (17.5%)',
          error: 'F1: 0.7798',
          bar: '',
        },
        {
          actual: 'POSITIF',
          forecast: '848 (12.5%)',
          error: 'F1: 0.6423',
          bar: '',
        },
        {
          actual: 'OVERALL',
          forecast: 'TRAIN: 91.38%',
          error: 'TEST: 87.44%',
          bar: 'GAP: 3.93%',
        },
      ],
    },
  },
  {
    slug: 'ecommerce-sales-operational-analytics',
    title: 'E-Commerce Sales & Operational Analytics',
    tag: 'Tableau',
    summary:
      'Dashboard interaktif Tableau untuk menganalisis kinerja penjualan $5.1M+, efisiensi logistik, preferensi pembayaran, dan performa 4 wilayah operasional.',
    description:
      'Pengembangan Executive Dashboard berbasis Tableau Desktop yang menyajikan analisis komprehensif terhadap 5.000 transaksi e-commerce multi-tahun. Dashboard ini mengevaluasi tren pendapatan bulanan, efisiensi rantai pasok (delivery days), diversifikasi saluran pembayaran, hingga pemerataan pendapatan regional.',
    stack: ['Tableau', 'SQL', 'Data Analytics', 'Business Intelligence'],
    visualizations: [
      {
        title: 'Executive KPI Overview',
        caption:
          'Total Revenue $5.1M, Average Order Value (AOV) $1,022, 5.000 Pesanan, serta Rata-rata Pengiriman 6 Hari',
        icon: 'bar-chart',
        image: '/images/projects/ecommerce-dashboard-main.jpg',
      },
      {
        title: 'Monthly Revenue Trend',
        caption:
          'Puncak penjualan di bulan Mei ($479.7K) & Agustus ($460.8K) vs titik terendah di April ($398.7K)',
        icon: 'activity',
        image: '/images/projects/ecommerce-monthly-trend.jpg',
      },
      {
        title: 'Category & Payment Performance',
        caption:
          'Electronics & Clothing menyumbang >65% revenue dengan dominasi pembayaran Card ($2.36M) & COD ($1.78M)',
        icon: 'bar-chart',
        image: '/images/projects/ecommerce-category-payment.jpg',
      },
      {
        title: 'Regional Revenue Balance',
        caption:
          'Distribusi pendapatan antar wilayah sangat seimbang: West (26.3%), North (25.1%), South (24.4%), East (24.2%)',
        icon: 'map',
        image: '/images/projects/ecommerce-regional-performance.jpg',
      },
    ],
    challenge: {
      description:
        'Kebutuhan manajemen e-commerce akan visibilitas menyeluruh terhadap efisiensi rantai pasok, kepuasan pelanggan yang tertahan di angka 3.0/5.0, serta penetrasi metode pembayaran digital yang belum optimal.',
      points: [
        'Penurunan tren pendapatan berulang pada bulan April ($398.7K) dan September ($402.3K) yang butuh evaluasi promosi khusus',
        'Rata-rata kepuasan pelanggan stagnan pada rating 3.0/5.0 di semua tier waktu pengiriman (Fast, Standard, Slow)',
        'Rendahnya tingkat adopsi metode pembayaran E-Wallet yang baru mencapai porsi 19.1% ($955K) dari total revenue',
      ],
    },
    impact: [
      { label: 'Total Revenue Analyzed', value: '$5,109,776' },
      { label: 'Average Order Value (AOV)', value: '$1,022' },
      { label: 'Total Analyzed Transactions', value: '5,000 Orders' },
      { label: 'Top Region Share (West)', value: '26.3%' },
    ],
    solution: [
      {
        step: '01',
        title: 'Executive KPI & Trend Modeling',
        description:
          'Membangun agregasi metrik finansial dan pemodelan tren bulanan untuk mengidentifikasi pola musiman belanja pelanggan.',
      },
      {
        step: '02',
        title: 'Delivery Tiering & Rating Analysis',
        description:
          'Mengelompokkan durasi pengiriman menjadi Fast (1-3 Hari), Standard (4-7 Hari), dan Slow (>7 Hari) untuk menguji korelasinya terhadap rating.',
      },
      {
        step: '03',
        title: 'Cross-Category Payment Profiling',
        description:
          'Menganalisis matriks kombinasi kategori produk (Electronics, Clothing, Home, Beauty) dengan metode pembayaran (Card, COD, Wallet).',
      },
    ],
    insights: {
      paragraphs: [
        'Kategori Electronics ($1.83M) dan Clothing ($1.53M) menjadi pilar utama bisnis dengan kontribusi melebihi 65% dari total pendapatan. Metode pembayaran didominasi oleh Kartu Kredit/Debit ($2.36M) dan COD ($1.78M), sementara adopsi E-Wallet masih memiliki potensi pertumbuhan besar ($955K / 19.1%).',
        'Analisis logistik menunjukkan distribusi pendapatan antar regional sangat merata (West 26.3% hingga East 24.2%). Durasi pengiriman (rata-rata 6 hari) tidak berpengaruh signifikan pada rating kepuasan yang stagnan di angka 3.0, menandakan perlunya fokus perbaikan pada kontrol kualitas produk dan layanan purna jual.',
      ],
      codeFileName: 'regional_sales_summary.py',
      rows: [
        { actual: 'WEST', forecast: '$1,345,582', error: '26.3%', bar: '6.08 Days' },
        { actual: 'NORTH', forecast: '$1,281,508', error: '25.1%', bar: '6.12 Days' },
        { actual: 'SOUTH', forecast: '$1,246,641', error: '24.4%', bar: '6.17 Days' },
        { actual: 'EAST', forecast: '$1,236,044', error: '24.2%', bar: '6.10 Days' },
        {
          actual: 'OVERALL',
          forecast: '$5,109,776',
          error: 'AOV: $1,022',
          bar: 'AVG: 6 Days',
        },
      ],
    },
  },
  {
    slug: 'superstore-commercial-performance-profitability',
    title: 'Superstore Commercial & Profitability Analytics',
    tag: 'Power BI',
    summary:
      'Dashboard Power BI interaktif untuk memantau performa komersial, mengidentifikasi titik kebocoran profit (profit leaks), dan optimasi strategi diskon Superstore.',
    description:
      'Pengembangan Commercial Performance & Profitability Optimization Dashboard berbasis Power BI Desktop, Power Query, dan DAX. Dashboard ini memetakan hubungan antara peningkatan volume omset (Sales) dan erosi profitabilitas akibat strategi diskon dan penetapan harga yang kurang terkontrol pada tingkat sub-kategori produk dan wilayah operasional.',
    stack: ['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Data Analytics'],
    visualizations: [
      {
        title: 'Commercial KPI Overview',
        caption:
          'Total Sales $46.67K, Total Profit $2.52K, Profit Margin 5.41%, dan Total Orders 275 transaksi (Wilayah Central - Office Supplies 2017)',
        icon: 'bar-chart',
        image: '/images/projects/superstore-dashboard-main.jpg',
      },
      {
        title: 'Monthly Sales vs Profit Trend',
        caption:
          'Spike omset pada kuartal akhir (September & November) tidak diimbangi kenaikan profit akibat diserap diskon promosi agresif',
        icon: 'activity',
        image: '/images/projects/superstore-sales-profit-trend.jpg',
      },
      {
        title: 'Profit Bleed by Sub-Category',
        caption:
          'Identifikasi kerugian terbesar pada Binders (-$800+) dan Appliances (-$240+), serta pendorong profit utama pada Paper (+$2,300+)',
        icon: 'bar-chart',
        image: '/images/projects/superstore-profit-subcategory.jpg',
      },
      {
        title: 'Sales & Profit Margin Alignment',
        caption:
          'Tingkat margin kategori Office Supplies tertekan hingga 5.41%, jauh di bawah standar ideal perusahaan 12%-15%',
        icon: 'map',
        image: '/images/projects/superstore-margin-alignment.jpg',
      },
    ],
    challenge: {
      description:
        'Volume penjualan Superstore skala nasional tergolong tinggi, tetapi profitabilitas mengalami penurunan tajam pada wilayah dan segmen produk tertentu akibat efisiensi diskon yang tidak terkontrol.',
      points: [
        'Kebocoran profitabilitas (profit leaks) pada sub-kategori Binders dan Appliances di wilayah Central yang tergerus diskon >25%',
        'Spike omset di kuartal IV tidak berdampak signifikan pada peningkatan laba bersih akibat promo direct price cut yang terlalu agresif',
        'Margin keuntungan secara keseluruhan tertekan hingga 5.41%, berada di bawah ambang batas sehat perusahaan (12%-15%)',
      ],
    },
    impact: [
      { label: 'Total Analyzed Sales', value: '$46,666.83' },
      { label: 'Net Realized Profit', value: '$2,524.94' },
      { label: 'Analyzed Profit Margin', value: '5.41%' },
      { label: 'Total Tracked Orders', value: '275 Orders' },
    ],
    solution: [
      {
        step: '01',
        title: 'Power Query Cleaning & Deduplication',
        description:
          'Melakukan deduplikasi Row ID, pembersihan format $, perbaikan variasi teks kategori (Offcie Supplies), dan filtering transaksi anomali.',
      },
      {
        step: '02',
        title: 'DAX Modeling & Dynamic Calendar',
        description:
          'Membuat tabel dimensi kalender terpisah (Dim_Calendar) via relasi 1-to-Many serta menyusun ukuran analisis DAX (Sales, Profit, Margin %).',
      },
      {
        step: '03',
        title: 'Profit Leakage & Sub-Category Diagnostics',
        description:
          'Mengisolasi titik kerugian pada Binders dan Appliances serta merumuskan strategi Discount Cap (maksimal 10%-15%) dan Product Bundling.',
      },
    ],
    insights: {
      paragraphs: [
        'Hasil diagnosa filter spesifik (Central | Office Supplies | 2017) menunjukkan bahwa lonjakan omset pada akhir tahun dipicu oleh penetapan diskon agresif yang terbukti menggerus profitabilitas (Profit Margin hanya 5.41% dibanding standar ideal 12%-15%).',
        'Sub-kategori Binders (-$800+) dan Appliances (-$240+) menjadi area kebocoran profit utama. Strategi penanganan direkomendasikan melalui pembatasan diskon (Discount Cap max 15%) serta mengalihkan promo akhir tahun ke sistem bundling dengan produk margin tinggi seperti Paper (+$2,300+).',
      ],
      codeFileName: 'powerbi_superstore_kpi.dax',
      rows: [
        {
          actual: 'TOTAL SALES',
          forecast: '$46,666.83',
          error: 'MARGIN: 5.41%',
          bar: '275 Orders',
        },
        {
          actual: 'NET PROFIT',
          forecast: '$2,524.94',
          error: 'TARGET: 12-15%',
          bar: 'GAP: -6.59%',
        },
        {
          actual: 'PAPER (TOP)',
          forecast: '+$2,300.00',
          error: 'HIGH MARGIN',
          bar: 'PROFIT DRIVER',
        },
        {
          actual: 'BINDERS (LOSS)',
          forecast: '-$800.00+',
          error: 'DISCOUNT >25%',
          bar: 'PROFIT BLEED',
        },
        {
          actual: 'OVERALL STATUS',
          forecast: 'CENTRAL 2017',
          error: 'OFFICE SUPPLIES',
          bar: 'NEEDS CAP',
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
