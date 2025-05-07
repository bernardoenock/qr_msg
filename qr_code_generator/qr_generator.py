import qrcode

def generate_qr_code(url: str, filename: str = "qr_code.png") -> None:
    """
    Generates a QR code from a given URL and saves it as a PNG image.

    :param url: The destination URL to be encoded in the QR code
    :param filename: The output image filename (default is 'qr_code.png')
    """
    qr = qrcode.QRCode(
        version=1,  # Controls the size of the QR code (1 = smallest)
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    image = qr.make_image(fill_color="black", back_color="white")
    image.save(filename)
    print(f"QR code saved as '{filename}'")

if __name__ == "__main__":
    target_url = "https://bernardoenock.github.io/qr_msg/"  # Replace with your desired URL
    generate_qr_code(target_url)
