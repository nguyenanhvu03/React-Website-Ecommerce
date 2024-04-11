import React from 'react'
import './Descriptionbox.css'

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>

      </div>
      <div className="description-description">
        <p>Lookbook: Tạo ra các bộ sưu tập thời trang tương ứng với mỗi mùa, xu hướng hoặc sự kiện đặc biệt. Tạo ra hình ảnh hoặc video để trình diễn các trang phục và phong cách khác nhau, và chia sẻ gợi ý về cách kết hợp chúng.</p>
        <p>
        Hướng dẫn phối đồ: Tạo ra các bài viết hoặc video hướng dẫn cách phối quần áo theo cách chuyên nghiệp. Cung cấp gợi ý về cách tạo nên các bộ trang phục phù hợp với từng dịp, loại hình công việc hoặc phong cách riêng của khách hàng. 
        </p>
      </div>
    </div>
  )
}

export default Descriptionbox
