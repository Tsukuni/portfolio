class CreateAccessLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :access_logs do |t|
      t.integer :amount, default: 0
      t.integer :total_amount, default: 0

      t.timestamps
    end
  end
end
