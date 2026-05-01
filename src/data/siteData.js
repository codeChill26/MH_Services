import {
  BarChart3,
  Bot,
  MonitorSmartphone,
  Rocket,
  SearchCheck,
  ShieldCheck,
  ShoppingCart,
  Users,
} from 'lucide-react';

export const contactInfo = {
  phone: '0902477473',
  email: 'maxhuynh2005@gmail.com',
  facebook: 'https://www.facebook.com/share/1YxUXYoG6g/',
  zalo: 'https://zalo.me/0902477473',
  location: 'Ho Chi Minh City, Vietnam',
};

export const services = [
  {
    icon: MonitorSmartphone,
    title: 'Website theo yêu cầu',
    text: 'Giao diện hiện đại, responsive, tối ưu trải nghiệm khách hàng.',
  },
  {
    icon: ShoppingCart,
    title: 'Website bán hàng',
    text: 'Landing bán sản phẩm, catalog, giỏ hàng và luồng đặt mua rõ ràng.',
  },
  {
    icon: Rocket,
    title: 'Landing page quảng cáo',
    text: 'Tập trung chuyển đổi cho chiến dịch Facebook, Google, TikTok Ads.',
  },
  {
    icon: SearchCheck,
    title: 'SEO cơ bản',
    text: 'Cấu trúc nội dung, tốc độ tải, meta và tracking nền tảng.',
  },
  {
    icon: Bot,
    title: 'Form, chatbot, automation',
    text: 'Kết nối lead về email, sheet, CRM hoặc kịch bản chăm sóc tự động.',
  },
];

export const stats = [
  { icon: ShieldCheck, label: 'Tăng độ uy tín online' },
  { icon: Users, label: 'Thu hút khách hàng tiềm năng' },
  { icon: BarChart3, label: 'Tối ưu chuyển đổi và doanh thu' },
];

export const projects = [
  {
    name: 'Nội thất',
    title: 'Không gian sống đẳng cấp',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
    accent: '#d6c7ae',
    previewEyebrow: 'Studio nội thất',
    previewText: 'Bố cục sang trọng cho showroom, portfolio dự án và form đặt lịch tư vấn.',
    modalText: 'Mẫu phù hợp cho đơn vị thiết kế, thi công nội thất, showroom hoặc thương hiệu decor cao cấp.',
    features: ['Hero giới thiệu dự án', 'Gallery công trình', 'Form đặt lịch tư vấn'],
  },
  {
    name: 'Thời trang',
    title: 'New Collection 2026',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    accent: '#f1f4f8',
    previewEyebrow: 'Fashion campaign',
    previewText: 'Trang giới thiệu bộ sưu tập mới với ảnh lớn, CTA rõ và section sản phẩm nổi bật.',
    modalText: 'Mẫu dành cho shop thời trang, local brand hoặc chiến dịch ra mắt bộ sưu tập theo mùa.',
    features: ['Lookbook trực quan', 'CTA mua hàng nhanh', 'Khu vực sản phẩm nổi bật'],
  },
  {
    name: 'F&B',
    title: 'The Coffee Experience',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    accent: '#c28a4d',
    previewEyebrow: 'Coffee & dining',
    previewText: 'Không gian ấm, nổi bật menu, câu chuyện thương hiệu và nút đặt bàn/đặt món.',
    modalText: 'Mẫu hợp với quán cà phê, nhà hàng, thương hiệu đồ uống hoặc mô hình F&B cần tăng nhận diện.',
    features: ['Menu món nổi bật', 'Câu chuyện thương hiệu', 'CTA đặt bàn/đặt món'],
  },
  {
    name: 'Bất động sản',
    title: 'Tìm kiếm ngôi nhà mơ ước',
    image:
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&q=80',
    accent: '#82b7d8',
    previewEyebrow: 'Real estate',
    previewText: 'Mẫu landing tập trung vào hình ảnh dự án, tiện ích, thông tin vị trí và thu lead.',
    modalText: 'Mẫu dành cho môi giới, dự án căn hộ, nhà phố, biệt thự hoặc landing chạy quảng cáo bất động sản.',
    features: ['Thông tin dự án', 'Tiện ích và vị trí', 'Form nhận tư vấn'],
  },
  {
    name: 'Giáo dục',
    title: 'Học tập dễ dàng hơn',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    accent: '#4aa3ff',
    previewEyebrow: 'Education platform',
    previewText: 'Thiết kế rõ ràng cho khóa học, trung tâm đào tạo và form đăng ký tư vấn.',
    modalText: 'Mẫu phù hợp cho trung tâm ngoại ngữ, khóa học online, lớp kỹ năng hoặc chương trình đào tạo.',
    features: ['Danh sách khóa học', 'Lợi ích học viên', 'Form đăng ký tư vấn'],
  },
];

export const processSteps = [
  'Tư vấn mục tiêu, chân dung khách hàng và nội dung chính.',
  'Thiết kế giao diện, prototype và tối ưu hành trình chuyển đổi.',
  'Phát triển React, responsive, tracking và kiểm thử tốc độ.',
  'Bàn giao, hướng dẫn vận hành và hỗ trợ sau khi website online.',
];
