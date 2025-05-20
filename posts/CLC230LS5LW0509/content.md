<!-- TEMPLATE này dành cho định dạng nội dung blog cá nhân.

THUMBNAIL
    Đường dẫn or đường link hình ảnh
HEADER
    title: tiêu đề chính của bài viết. | author: tên tác giả. | time: ngày tháng đăng. | tag: danh sách các thẻ (tags), mỗi thẻ một dòng.
NỘI DUNG - các nội dung nằm bên dưới Marker
    Các Marker được hỗ trợ: h2 | h3 | para | imginline | layout1 (img-text) | layout2 (text-img) | quote | callout | figcaption
Ngoài ra
    Có thẻ highlight (sử dụng inline trong văn bản bằng [[style:text]])
        [[xanh:...]], [[xam:...]], [[dam:...]], [[nghien:...]], [[dam_xanh:...]], [[dam_xam:...]], [[gachchan:...]]

                               Bên dưới là phần viết  -->
thumbnail
../assets/images/thumbcloud1.jpg

title
Tổng quan về Cloud Computing - Cùng khám phá sức mạnh của "đám mây công nghệ" này

author
AnPnh

time
April 30, 2025

tag
CloudComputing
ComputerNetworking

para
Xin chào các bạn, mình là An. Đây có thể nói là bài viết gần như là đầu tiên trên trang Blog này của mình.
Bài blog này cũng mở đầu cho chuỗi các bài viết về chủ đề Cloud Computing - một chủ đề đã gây hứng thú và những sự tò mò đầu tiên trên con đường đại học của mình. Bài viết được xây dựng dựa trên kiến thức, trải nghiệm của mình sau khi hoàn thành khóa học [[dam_xam:Introduction to Cloud Computing]] của IBM trên coursera. Link khóa học mình sẽ để bên dưới cùng!

h2
Giới thiệu

para
Cloud Computing - Điện toán đám mây có lẽ đã không còn xa lạ trong mỗi chúng ta, đặc biệt là những người theo học về lĩnh vực Công nghệ thông tin. Nói sơ về lịch sử của Cloud Computing, có thể nói công nghệ này đã “có tuổi” khi đã xuất hiện và tồn tại từ khoảng thập niên 60 của thế kỉ trước. Đến đầu những năm 2000, Amazon ra mắt Amazon Web Services (AWS) với các dịch vụ như Amazon Mechanical Turk và Elastic Compute Cloud (EC2). Cùng năm, Google giới thiệu Google Docs, cho phép lưu trữ và chỉnh sửa tài liệu trực tuyến. Năm 2007, IBM, Google và các trường đại học hợp tác xây dựng server farm để nghiên cứu, tận dụng điện toán đám mây. Dần dần về sau, công nghệ này phát triển mạnh mẽ bởi sức mạnh và những lợi ích to lớn mà nó mang lại.

imginline
../../assets/images/cloudintro.jpg
Đây là một cái ảnh minh họa

para
Trước khi điện toán đám mây xuất hiện, các tổ chức và doanh nghiệp chủ yếu lưu trữ dữ liệu tại chỗ trên các máy chủ vật lý đặt trong cơ sở hạ tầng của họ. Phương pháp truyền thống này tồn tại nhiều hạn chế rõ rệt. Đầu tiên là chi phí đầu tư ban đầu rất cao, bao gồm chi phí cho phần cứng, phần mềm, lắp đặt và bảo trì hệ thống. Hãy tưởng tượng bạn thành lập một doanh nghiệp và bạn muốn xây dựng trung tâm dữ liệu tại chỗ. Bạn sẽ cần mua sắm rất nhiều thứ, bao gồm các máy chủ, thiết bị lưu trữ, bộ lưu điện, hệ thống làm mát, và các thiết bị mạng đi kèm,... Tại đây có một nhược điểm lớn nữa, đó là giả sử ban đầu bạn có 10 nhân viên và bạn có một số tiền ít ỏi đủ để xây dựng cơ sở hạ tầng để lưu trữ thông tin và cung cấp “không gian làm việc” cho 15 nhân viên, bổng một ngày bạn làm ăn khắm khá và số lượng nhân viên tăng lên 50 nhân sự. Có thể thấy, việc mở rộng hạ tầng khi nhu cầu tăng trưởng phát sinh thường sẽ vô cùng tốn kém, phức tạp và mất nhiều thời gian cũng như công sức. Hệ thống lưu trữ tại chỗ cũng thiếu linh hoạt, khả năng mở rộng bị giới hạn, và dữ liệu chỉ có thể truy cập được từ vị trí vật lý đặt máy chủ, gây khó khăn trong việc làm việc từ xa hoặc chia sẻ tài nguyên. Ngoài ra, việc quản lý và vận hành hạ tầng CNTT tại chỗ đòi hỏi đội ngũ kỹ thuật có chuyên môn cao để đảm bảo hệ thống hoạt động ổn định và an toàn. Các rủi ro liên quan đến thiên tai, hỏa hoạn hoặc sự cố phần cứng có thể dẫn đến mất mát dữ liệu nghiêm trọng nếu không có chiến lược sao lưu và khôi phục phù hợp. Trong bối cảnh môi trường kinh doanh hiện đại đòi hỏi sự linh hoạt, hiệu quả và khả năng thích ứng nhanh, những hạn chế này khiến mô hình lưu trữ truyền thống ngày càng trở nên kém phù hợp. Chính vì vậy, điện toán đám mây đã ra đời như một giải pháp thay thế ưu việt, và hỗ trợ doanh nghiệp chuyển đổi số một cách hiệu quả.

para
Điện toán đám mây (Cloud Computing) ra đời như một giải pháp cách mạng để giải quyết những thách thức này, mang đến khả năng mở rộng linh hoạt, tiết kiệm chi phí và nhanh chóng trở thành một công nghệ cốt lõi trong kỷ nguyên số ngày nay. Bài viết này sẽ giúp bạn hiểu rõ Điện toán đám mây là gì, các đặc điểm cơ bản làm nên sức mạnh của nó, và tại sao nó lại mang lại lợi ích to lớn cho cả doanh nghiệp lẫn người dùng cá nhân.

h2
Điện toán Đám mây là gì?

para
Có nhiều cách định nghĩa về Điện toán đám mây, ở đây mình có tìm hiểu và tổng hợp một số định nghĩa như sau:

quote
[[dam_xam:Theo Viện tiêu chuẩn và Công nghệ Hoa Kỳ (NIST)]]: Cloud Computing là mô hình dễ hiện thực một cách tiện lợi, theo nhu cầu việc truy cập mạng tới một nguồn tài nguyên tính toán có thể cấu hình. Mô hình này có thể được cung cấp một cách ít tốn công sức trong việc quản lý và tương tác với nhà cung cấp dịch vụ.

para
hoặc là:

quote
[[dam_xam:Theo nhà khoa học Rajkumar Buyya]]: Điện toán đám mây là một hệ thống xử lý song song và phân tán, bao gồm một tập hợp các máy tính được kết nối và ảo hóa một cách linh động và được thể hiện như một hoặc nhiều tài nguyên tính toán đồng nhất dựa trên các thỏa thuận ở mức dịch vụ được thiết lập thông qua việc đàm phán giữa nhà cung cấp dịch vụ và người tiêu dùng.

layout1
../../assets/images/whatiscloud.jpg
Vẫn là cái ảnh minh họa nhưng nền vàng
Nói một cách đơn giản hơn thì Điện toán đám mây là một mô hình mà việc tính toán dữ liệu, xử lý thông tin diễn ra không phải trên máy tính cục bộ (local computer) của bạn mà sẽ diễn ra ở trên các "Đám mây". "Đám mây" ở đây thực chất là một môi trường tập hợp gồm các máy chủ đã được ảo hóa (virtualized) từ máy chủ vật lý và chúng có thể kết nối với nhau. Các máy chủ ảo (Virtual Machines - VM) này cung cấp các tài nguyên máy tính không khác gì một chiếc máy tính vật lý thông thường, bao gồm mạng, lưu trữ, ứng dụng, v.v.. Và việc truy cập, sử dụng, quản lý các máy chủ ảo này được thực hiện thông qua internet.

h2
Làm cách nào để truy cập và sử dụng các dịch vụ Cloud?

para
Sau khi đã hiểu được Điện toán Đám mây là gì, câu hỏi tiếp theo chắc chắn sẽ là: "Làm cách nào để mình có thể truy cập và sử dụng những dịch vụ Cloud này?" hay "Các nhà cung cấp dịch vụ đã làm cách nào để cung cấp chúng đến với chúng ta?". Đừng lo lắng, chúng ta sẽ lần lược tìm hiểu qua từng nội dung này!
Đầu tiên là một ví dụ về việc sử dụng dịch vụ Cloud. Hãy tưởng tượng bạn cần lưu trữ hàng nghìn bức ảnh hay video hay ho, thú vị. Thay vì bạn phải phải mua ổ cứng đủ tốt, đủ dung lượng cho bạn thoải mái lưu trữ, hoặc đôi khi hay quên rồi bỏ mất rồi vô tình hư hỏng,... Thì bạn có thể lưu toàn bộ ảnh, video đó trên Google Drive hay iCloud. Rõ ràng là bạn đâu cần quan tâm tới việc các tấm ảnh đó được lưu trữ ở đâu, thiết bị gì lưu trữ nó, dung lượng còn lại là bao nhiểu, cái bạn quan tâm là khi bạn cần xem ảnh hoặc sử dụng chúng thì chúng có ngay lập tức hoặc các video, ảnh đó của bạn được bảo vệ ra sao, không cho ai khác ngoài bạn nhìn thấy được chúng. 
Rõ ràng để sử dụng dịch vụ Cloud, chúng ta chỉ cần một thiết bị có kết nối với Internet và chúng ta lựa chọn nhà cung cấp dịch vụ Cloud mà chúng ta yêu thích, thế là sử dụng được rồi (Ở đây mình đang đề cập đến người dùng cuối, nếu bạn là những người làm trong lĩnh vực công nghệ thì có thể không đơn giản như vậy, bạn cần có kiến thức cơ bản về hệ thống, làm việc với cơ sở dữ liệu, máy ảo hoặc học thêm về quy trình triển khai ứng dụng,...). Còn đối với câu hỏi "Các nhà cung cấp dịch vụ đã làm cách nào để cung cấp các dịch vụ ấy đến với chúng ta?" thì trong những bài blog sau mình sẽ trình bày sau.

h2
Năm Đặc điểm Thiết yếu của Cloud Computing

para
Như đã nói, Cloud Computing chính là cách chúng ta khai thác sức mạnh tính toán, lưu trữ và xử lý dữ liệu từ xa thông qua các hệ thống máy chủ được ảo hóa và được truy cập hoàn toàn thông qua Internet. Nhưng để có thể nói về lý do mà các [[dam_xam:đám mây công nghệ]] này đang dần thay thế các mô hình truyền thống khi tổ chức doanh nghiệp (như việc tổ chức lưu trữ dữ liệu tại chổ) thì phải nói đến năm đặc điểm thiết yếu của mô hình này.

imginline
../../assets/images/5ddcloud.jpg
Năm Đặc điểm Thiết yếu của Cloud Computing

para
1. [[dam:Khả năng tự phục vụ theo yêu cầu (On-demand self-service)]] – một trong những yếu tố quan trọng nhất khiến Cloud Computing trở nên linh hoạt và tiện lợi. Bạn có thể truy cập và sử dụng các nguồn tài nguyên trên Đám mây (như sức mạnh tính toán, khả năng lưu trữ, cơ sở dữ liệu, hoặc thậm chí là một mạng ảo riêng biệt) bất cứ khi nào bạn có nhu cầu mà không cần tương tác trực tiếp với nhà cung cấp dịch vụ. Các nguồn tài nguyên này luôn luôn sẵn sàng, hoạt động 24/7, giúp bạn triển khai hệ thống chỉ trong vài phút.
2. [[dam:Khả năng truy cập mạng mở rộng (Broad network access)]]: Bạn có thể truy cập vào các tài nguyên đám mây từ mọi nơi, trên mọi loại thiết bị, miễn là thiết bị đó có kết nối Internet. Một điểm quan trọng là bạn không cần quan tâm đến vị trí vật lý của các tài nguyên này, nó có thể đặt ở bất kỳ đâu, việc xử lý định tuyến và phân phối tài nguyên một cách tối ưu, mượt mà và an toàn đã được nhà cung cấp bảo đảm.
3. [[dam:Quản lý tài nguyên chung (Resource pooling)]]: Các tài nguyên tính toán của nhà cung cấp được gom thành một "pooling" chung. Khi phát sinh nhu cầu sử dụng, tài nguyên sẽ được phân bổ từ pooling đó. Điều này có nghĩa là mô hình này cho phép nhiều người dùng khác nhau sử dụng chung một nguồn tài nguyên vật lý mà không ảnh hưởng gì tới nhau. Ví dụ, resource pooling cho phép các máy ảo (VM) chia sẻ tài nguyên chung (như CPU, bộ nhớ, lưu trữ) từ một nhóm tài nguyên do máy chủ vật lý cung cấp, thay vì mỗi máy ảo là một tài nguyên riêng biệt. Hoặc một ví dụ khác dễ hình dung là giả sử bạn và hàng chục doanh nghiệp khác cùng thuê máy chủ ảo (VM) từ một nhà cung cấp như Amazon Web Services. Tất cả các máy ảo này được chạy trên cùng một máy chủ vật lý, nhưng hệ thống Cloud sẽ đảm bảo rằng VM của bạn chỉ sử dụng đúng lượng tài nguyên bạn cần, và hoạt động hoàn toàn tách biệt với người khác. Mô hình này giúp tiết kiệm chi phí cho cả nhà cung cấp tài nguyên nguyên và cả người dùng cuối hoặc doanh nghiệp sử dụng dịch vụ Cloud bởi vì bhà cung cấp không cần xây dựng hạ tầng riêng cho từng khách hàng, và khách hàng thì chỉ cần trả tiền cho đúng những gì họ sử dụng, không lãng phí.
4. [[dam:Tính đàn hồi nhanh (Rapid elasticity)]]: Khả năng này cho phép bạn nhanh chóng tăng hoặc giảm quy mô tài nguyên theo nhu cầu sử dụng một cách linh hoạt. Khi nhu cầu tăng đột ngột, hệ thống đám mây có thể tự động triển khai các máy chủ bổ sung để xử lý tải. Ngược lại, khi nhu cầu giảm, tài nguyên không cần thiết sẽ được giải phóng, giúp tối ưu chi phí. Để dễ hình dung, bạn có một trang web bán giày, trong ngày bình thường trung bình lưu lượng truy cập vào trang web của bạn không nhiều do bạn bán ế. Đến gần các dịp lễ hay đầu tháng, mọi người có tiền ồ ạt đi mua giày, lưu lượng truy cập vào website của bạn tăng đột biến, thì lúc này Cloud sẽ tự động scale up lên, sử dụng thêm các chủ để tải các lưu lượng truy cập đó, luôn luôn đảm bảo website của bạn luôn hoạt động mà không gặp sự cố như sặp web.
5. [[dam:Dịch vụ được đo lường (Measured service)]]: Việc sử dụng tài nguyên của người dùng được giám sát, kiểm soát và báo cáo một cách minh bạch. Mọi hoạt động trên Cloud – từ dung lượng lưu trữ bạn sử dụng, số giờ chạy máy chủ ảo, đến băng thông mạng tiêu thụ – đều được ghi nhận, theo dõi và báo cáo rõ ràng. Quan trọng nhất, bạn chỉ trả phí cho những tài nguyên mà bạn thực sự sử dụng (mô hình pay-as-you-use). Nhờ vậy, các doanh nghiệp dễ dàng lập kế hoạch chi phí và ngân sách, quản lý mức chi phí tốt hơn.

h2
Lợi ích của Điện toán Đám mây

para
Nhờ có năm đặc điểm thiết yếu kể trên, Điện toán đám mây mang lại rất nhiều lợi ích. Ngày nay, không thể nói là sử dụng Cloud hay không, mà phải là sử dụng ra sao cho hợp lý, sử dụng sao để mang lại hiệu quả cao nhất.

imginline
../../assets/images/benifitcloud.jpg
Lợi ích của Điện toán Đám mây

para
[[dam:Đối với các doanh nghiệp]]. Điện toán đám mây đang định hình lại cách họ vận hành, giúp họ tập trung vào giá trị cốt lõi mà không bị phân tâm bởi những hạn chế về hạ tầng công nghệ. Một trong những lợi ích lớn nhất là giảm chi phí đầu tư. Thay vì phải chi tiêu mạnh tay cho máy chủ vật lý, phần mềm hay các chi phí liên quan như bảo trì và quản lý cơ sở hạ tầng, doanh nghiệp có thể tận dụng đám mây để tiết kiệm ngân sách. Nhờ đó, nguồn lực được giải phóng, cho phép doanh nghiệp đầu tư vào việc phát triển mô hình kinh doanh và sáng tạo sản phẩm.
Chuyển sang một khía cạnh khác, đám mây còn giúp doanh nghiệp thử nghiệm và học hỏi nhanh hơn. Với khả năng triển khai nhanh chóng, các ý tưởng mới hay sản phẩm thử nghiệm có thể được đưa vào thực tế mà không cần đầu tư lớn. Nếu thất bại, doanh nghiệp cũng chỉ chịu rủi ro tối thiểu, từ đó rút ra bài học để cải thiện. Đây là một lợi thế lớn trong môi trường kinh doanh cạnh tranh khốc liệt ngày nay.
Không dừng lại ở đó, tính đàn hồi và khả năng mở rộng của đám mây mang đến sự linh hoạt vượt trội. Doanh nghiệp có thể dễ dàng mở rộng hoặc thu hẹp quy mô tùy theo nhu cầu kinh doanh và biến động thị trường. Điều này không chỉ giúp tối ưu hóa quy trình làm việc mà còn tăng cường khả năng thích ứng, tạo lợi thế cạnh tranh bền vững. Hơn nữa, với mô hình thanh toán theo nhu cầu sử dụng, doanh nghiệp chỉ trả cho những gì họ thực sự cần, giúp tối ưu hóa tài nguyên và giảm thiểu lãng phí một cách hiệu quả.
Một điểm cộng đáng kể khác là tốc độ triển khai. Việc thiết lập cơ sở hạ tầng đám mây chỉ mất vài phút, giúp doanh nghiệp nhanh chóng bắt đầu các dự án mà không bị chậm trễ bởi các quy trình phức tạp. Cuối cùng, nhưng không kém phần quan trọng, an ninh mạng cũng là một yếu tố then chốt. Các nhà cung cấp đám mây hàng đầu như IBM, AWS, Google hay Microsoft thường sở hữu các giải pháp bảo mật tiên tiến, vượt xa khả năng tự quản lý của nhiều tổ chức, đảm bảo dữ liệu và hệ thống luôn an toàn.

para
[[dam:Đối với người dùng cá nhân]]. Một trong những ưu điểm nổi bật là giảm chi phí tài nguyên tính toán. Thay vì phải đầu tư vào máy tính có cấu hình cao với bộ xử lý mạnh hay bộ nhớ lớn, người dùng có thể yêu cầu tài nguyên trên đám mây theo nhu cầu cụ thể. Điều này đặc biệt hữu ích cho những người làm việc với các tác vụ nặng như chỉnh sửa video, thiết kế đồ họa hay phân tích dữ liệu.
Tiếp theo, giảm chi phí lưu trữ cục bộ cũng là một lợi ích không thể bỏ qua. Người dùng không cần mua ổ cứng ngoài hay các thiết bị lưu trữ tốn kém. Thay vào đó, họ có thể phân bổ không gian lưu trữ trên đám mây một cách linh hoạt, chỉ trả tiền cho dung lượng thực sự sử dụng. Điều này không chỉ tiết kiệm chi phí mà còn giúp quản lý dữ liệu hiệu quả hơn.
Một lợi ích quan trọng khác là an toàn dữ liệu. Với đám mây, người dùng không còn phải lo lắng về việc mất dữ liệu do lỗi phần cứng hay hư hỏng thiết bị. Dữ liệu được lưu trữ an toàn trên các máy chủ đám mây, có thể khôi phục dễ dàng khi cần. Hơn nữa, đa dạng hóa thiết bị truy cập mang lại sự tiện lợi tối đa. Người dùng có thể truy cập tài nguyên và dữ liệu từ bất kỳ thiết bị nào – điện thoại, máy tính bảng hay laptop – miễn là có kết nối internet, giúp công việc và cuộc sống trở nên linh hoạt hơn bao giờ hết.

h2
Kết luận

para
Tóm lại, Điện toán đám mây là một mô hình tính toán dựa trên internet, mang lại khả năng truy cập linh hoạt, mở rộng nhanh chóng, và chỉ thanh toán cho những gì sử dụng. Nó đã thay đổi cách thức hoạt động của các tổ chức và cá nhân, mang lại những lợi ích rõ rệt về chi phí, hiệu quả và khả năng thích ứng.
Như các chuyên gia đã nhận định, việc sử dụng Cloud Computing không còn là câu hỏi "có nên hay không" mà là "sử dụng sao cho hợp lý và hiệu quả".

para
[[xam:Trong các bài blog tiếp theo, chúng ta sẽ cùng tìm hiểu sâu hơn về các khía cạnh khác của Cloud Computing, bao gồm: Các mô hình dịch vụ chính (IaaS, PaaS, SaaS), Các mô hình triển khai (Public Cloud, Private Cloud, Hybrid Cloud), Các thành phần cơ bản của hạ tầng đám mây (lưu trữ, mạng, máy chủ) và các chủ đề quan trọng khác như bảo mật đám mây và các công nghệ liên quan]]
[[xam:Hãy cùng đón đọc các bài viết tiếp theo để khám phá toàn diện thế giới của Điện toán Đám mây!]]
